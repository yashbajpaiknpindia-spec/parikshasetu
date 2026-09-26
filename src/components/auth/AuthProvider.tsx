"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export interface AppUser {
  email: string;
  name: string;
  role?: "USER" | "ADMIN";
}

interface AuthState {
  user: AppUser | null;
  loading: boolean;
  demoMode: boolean;
  googleEnabled: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signUp: (name: string, email: string, password: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthState | null>(null);
const DEMO_KEY = "ps_demo_user";

function nameFromEmail(email: string) {
  const base = email.split("@")[0].replace(/[._-]+/g, " ");
  return base.replace(/\b\w/g, (c) => c.toUpperCase());
}

async function postJSON(url: string, body: unknown) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

/**
 * Real backend auth (cookie-based session, verified server-side by Prisma).
 * Falls back to a per-browser demo account — same as before — whenever the
 * server reports the database isn't configured (`/api/auth/me` → demoMode).
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [demoMode, setDemoMode] = useState(false);
  const [googleEnabled, setGoogleEnabled] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data: { user: AppUser | null; demoMode: boolean; googleEnabled?: boolean }) => {
        if (!active) return;
        setDemoMode(data.demoMode);
        setGoogleEnabled(!!data.googleEnabled);
        if (data.user) {
          setUser(data.user);
        } else if (data.demoMode) {
          try {
            const raw = localStorage.getItem(DEMO_KEY);
            if (raw) setUser(JSON.parse(raw));
          } catch {
            /* ignore */
          }
        }
        setLoading(false);
      })
      .catch(() => {
        // API unreachable (e.g. static export) — behave like demo mode.
        if (!active) return;
        setDemoMode(true);
        try {
          const raw = localStorage.getItem(DEMO_KEY);
          if (raw) setUser(JSON.parse(raw));
        } catch {
          /* ignore */
        }
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    if (!demoMode) {
      const { ok, data } = await postJSON("/api/auth/login", { email, password });
      if (!ok) return { error: data.message ?? "Could not sign in." };
      setUser(data.user);
      return {};
    }
    const u = { email, name: nameFromEmail(email) };
    setUser(u);
    try {
      localStorage.setItem(DEMO_KEY, JSON.stringify(u));
    } catch {}
    return {};
  }, [demoMode]);

  const signUp = useCallback(async (name: string, email: string, password: string) => {
    if (!demoMode) {
      const { ok, data } = await postJSON("/api/auth/signup", { name, email, password });
      if (!ok) return { error: data.message ?? "Could not create your account." };
      setUser(data.user);
      return {};
    }
    const u = { email, name: name || nameFromEmail(email) };
    setUser(u);
    try {
      localStorage.setItem(DEMO_KEY, JSON.stringify(u));
    } catch {}
    return {};
  }, [demoMode]);

  const signOut = useCallback(async () => {
    if (!demoMode) {
      await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    }
    setUser(null);
    try {
      localStorage.removeItem(DEMO_KEY);
    } catch {}
  }, [demoMode]);

  return (
    <AuthContext.Provider value={{ user, loading, demoMode, googleEnabled, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
