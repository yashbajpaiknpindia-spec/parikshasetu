import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

/* -------------------------------------------------------------- Button */

type ButtonVariant = "primary" | "accent" | "outline" | "ghost" | "white" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

const buttonBase =
  "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-colors focus-visible:outline-2 disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm",
  accent: "bg-saffron-400 text-ink-900 hover:bg-saffron-300 shadow-sm",
  outline: "border border-ink-300 text-ink-800 hover:bg-ink-50 hover:border-ink-400",
  ghost: "text-ink-700 hover:bg-ink-100",
  white: "bg-white text-brand-700 hover:bg-ink-100 shadow-sm",
  secondary: "border border-ink-300 text-ink-800 hover:bg-ink-50 hover:border-ink-400",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "text-sm px-3.5 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-6 py-3",
};

export function buttonClass(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) {
  return cn(buttonBase, buttonVariants[variant], buttonSizes[size], className);
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ComponentProps<"button"> & { variant?: ButtonVariant; size?: ButtonSize }) {
  return <button className={buttonClass(variant, size, className)} {...props} />;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant; size?: ButtonSize }) {
  return <Link className={buttonClass(variant, size, className)} {...props} />;
}

/* ----------------------------------------------------------- Container */

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("container-x", className)}>{children}</div>;
}

/* -------------------------------------------------------------- Badge */

export function Badge({
  children,
  className,
  tone = "brand",
}: {
  children: ReactNode;
  className?: string;
  tone?: "brand" | "saffron" | "green" | "slate" | "amber";
}) {
  const tones = {
    brand: "bg-brand-50 text-brand-700 border-brand-100",
    saffron: "bg-saffron-50 text-saffron-700 border-saffron-200",
    green: "bg-teal-50 text-teal-800 border-teal-200",
    slate: "bg-ink-100 text-ink-700 border-ink-200",
    amber: "bg-amber-50 text-amber-800 border-amber-200",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------- SectionHeading */

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Alias for subtitle. */
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const sub = subtitle ?? description;
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-lg text-ink-600">{sub}</p>}
    </div>
  );
}

/* -------------------------------------------------------------- Callout */

export function Callout({
  title,
  children,
  tone = "amber",
  className,
}: {
  title?: string;
  children: ReactNode;
  tone?: "amber" | "brand" | "slate";
  className?: string;
}) {
  const tones = {
    amber: "border-amber-200 bg-amber-50 text-amber-900",
    brand: "border-brand-100 bg-brand-50 text-brand-900",
    slate: "border-ink-200 bg-ink-50 text-ink-800",
  } as const;
  return (
    <div className={cn("rounded-xl border p-4 text-sm leading-relaxed", tones[tone], className)}>
      {title && <p className="mb-1 font-semibold">{title}</p>}
      {children}
    </div>
  );
}

/* -------------------------------------------------------------- Card */

export function Card({
  className,
  children,
  hover = false,
}: {
  className?: string;
  children: ReactNode;
  hover?: boolean;
}) {
  return (
    <div className={cn("card p-6", hover && "card-hover", className)}>{children}</div>
  );
}
