export function requestMeta(req: Request) {
  const h = req.headers;
  const forwarded = h.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = h.get("cf-connecting-ip") || h.get("x-real-ip") || forwarded || null;
  const country = h.get("cf-ipcountry") || h.get("x-vercel-ip-country") || null;
  const region = h.get("x-vercel-ip-country-region") || null;
  const city = h.get("x-vercel-ip-city") || null;
  const userAgent = h.get("user-agent") || null;
  return { ip, country, region, city, userAgent };
}
