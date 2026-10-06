import { siteConfig } from "@/lib/config";

export function SiteStructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      email: siteConfig.supportEmail,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: `+${siteConfig.whatsappNumber}`,
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: ["en-IN", "hi-IN"],
    },
  ];
  return <>{data.map((item) => <script key={item["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />)}</>;
}
