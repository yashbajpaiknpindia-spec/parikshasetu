/**
 * Creates (or promotes) the admin account from env vars. Safe to re-run.
 * Run with `npm run db:seed` — used by Render's deploy hook, see RENDER_DEPLOY.md.
 */
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = (process.env.ADMIN_EMAIL ?? process.env.ADMIN_ID ?? "").trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD ?? "";
  const name = process.env.ADMIN_NAME ?? "Admin";

  if (!email || !password) {
    console.log("ADMIN_EMAIL (or ADMIN_ID) / ADMIN_PASSWORD not set — skipping admin seed.");
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.upsert({
    where: { email },
    update: { role: "ADMIN", name, passwordHash },
    create: { name, email, passwordHash, role: "ADMIN" },
  });

  console.log(`Admin ready: ${user.email} (${user.id})`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
