import "server-only";

import { prisma, isDbConfigured } from "@/lib/prisma";
import { MENTOR_LIVE, MENTOR_PRICE, PREP_PRICE } from "@/lib/pricing";

export interface PricingSettings {
  prepPrice: number;
  mentorPrice: number;
  mentorLive: boolean;
}

export const DEFAULT_PRICING_SETTINGS: PricingSettings = {
  prepPrice: PREP_PRICE,
  mentorPrice: MENTOR_PRICE,
  mentorLive: MENTOR_LIVE,
};

export async function getPricingSettings(): Promise<PricingSettings> {
  if (!isDbConfigured) return DEFAULT_PRICING_SETTINGS;
  const row = await prisma.pricingConfig.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      prepPrice: DEFAULT_PRICING_SETTINGS.prepPrice,
      mentorPrice: DEFAULT_PRICING_SETTINGS.mentorPrice,
      mentorLive: DEFAULT_PRICING_SETTINGS.mentorLive,
    },
  });
  return { prepPrice: row.prepPrice, mentorPrice: row.mentorPrice, mentorLive: row.mentorLive };
}

export function priceForProduct(settings: PricingSettings, product: "prep" | "mentor" | "mentor-upgrade") {
  if (product === "prep") return settings.prepPrice;
  if (product === "mentor") return settings.mentorPrice;
  return Math.max(0, settings.mentorPrice - settings.prepPrice);
}

export function productIsOnSale(settings: PricingSettings, product: "prep" | "mentor" | "mentor-upgrade") {
  if (product === "prep") return true;
  return settings.mentorLive;
}
