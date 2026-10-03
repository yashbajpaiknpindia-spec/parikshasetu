import type { Metadata, Viewport } from "next";
import { Inter, Poppins, Noto_Sans_Devanagari, Kalam, Noto_Nastaliq_Urdu, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppHelp";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { ActivityTracker } from "@/components/auth/ActivityTracker";
import { LanguageProvider } from "@/lib/i18n";
import { siteConfig } from "@/lib/config";
import { SiteStructuredData } from "@/components/seo/SiteStructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const notoDeva = Noto_Sans_Devanagari({
  variable: "--font-noto-deva",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Handwritten accent, Latin + Devanagari, so Hindi mode gets the same feel.
const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin", "devanagari"],
  weight: ["400", "700"],
  display: "swap",
});

const nastaliq = Noto_Nastaliq_Urdu({
  variable: "--font-nastaliq",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
  preload: false,
});

const bengali = Noto_Sans_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1d4ed8",
};

export const metadata: Metadata = {
  title: { default: "Teacher Exam Preparation for SUPER TET & BPSC TRE 4.0", template: `%s · ${siteConfig.name}` },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  category: "education",
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: "/brand/merit-marg-mark-512.png",
    shortcut: "/brand/merit-marg-mark-512.png",
    apple: "/brand/merit-marg-mark-512.png",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { title: "Teacher Exam Preparation for SUPER TET & BPSC TRE 4.0", description: siteConfig.description, url: siteConfig.url, siteName: siteConfig.name, locale: "en_IN", type: "website" },
  twitter: { card: "summary", title: "Teacher Exam Preparation for SUPER TET & BPSC TRE 4.0", description: siteConfig.description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${notoDeva.variable} ${kalam.variable} ${nastaliq.variable} ${bengali.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink-900">
        <SiteStructuredData />
        <LanguageProvider>
          <AuthProvider>
            <ActivityTracker />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFloat />
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
