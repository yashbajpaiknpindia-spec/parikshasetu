"use client";

import { useEffect, useState } from "react";
import { DEFAULT_PRICING } from "@/lib/pricing-client-default";

export interface ClientPricingSettings {
  prepPrice: number;
  mentorPrice: number;
  mentorLive: boolean;
}

export function usePricingSettings() {
  const [pricing, setPricing] = useState<ClientPricingSettings>(DEFAULT_PRICING);
  useEffect(() => {
    let active = true;
    fetch("/api/pricing", { cache: "no-store" })
      .then((r) => r.ok ? r.json() : null)
      .then((d) => {
        if (!active || !d) return;
        setPricing({
          prepPrice: Number(d.prepPrice) || DEFAULT_PRICING.prepPrice,
          mentorPrice: Number(d.mentorPrice) || DEFAULT_PRICING.mentorPrice,
          mentorLive: !!d.mentorLive,
        });
      })
      .catch(() => {});
    return () => { active = false; };
  }, []);
  return pricing;
}

export function clientPriceForProduct(pricing: ClientPricingSettings, product: "prep" | "mentor" | "mentor-upgrade") {
  if (product === "prep") return pricing.prepPrice;
  if (product === "mentor") return pricing.mentorPrice;
  return Math.max(0, pricing.mentorPrice - pricing.prepPrice);
}
