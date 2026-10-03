# Payment/function audit — 26 Sep 2026

Fixes applied:
- Prep Pass payment buttons no longer depend on a browser-visible Razorpay env variable before they can be clicked.
- Checkout asks the server to create the order; server config is authoritative.
- Server accepts RAZORPAY_KEY_ID or NEXT_PUBLIC_RAZORPAY_KEY_ID for compatibility, and always requires RAZORPAY_KEY_SECRET.
- Logged-out Prep Pass clicks route through login/signup and preserve the `buy=prep` return intent; after login the payment starts automatically.
- Stale-session 401 also preserves the purchase intent.
- Razorpay checkout is prefilled with the signed-in user's name/email.
- Verification checks HMAC signature, current account ownership, Razorpay order, Razorpay payment, captured status and amount before granting access.
- Prep Pass entitlement remains stored in Postgres and shown to admin; the cookie is only compatibility/display state.
- Restore purchase now requires the Razorpay order to belong to the currently logged-in account.
- Mentor booking no longer silently falls back to an unpaid local booking if Razorpay is unavailable/fails.
- Mentor booking amount is server-trusted from the mentor catalogue, not from the browser.
- Mentor booking verification re-checks the server-side mentor price before persisting a paid booking.
- All static internal href routes and all statically referenced `/api/...` fetch routes were checked for matching app routes.

Environment required on Render for live payment:
- DATABASE_URL
- JWT_SECRET
- RAZORPAY_KEY_SECRET
- Either RAZORPAY_KEY_ID or NEXT_PUBLIC_RAZORPAY_KEY_ID
- NEXT_PUBLIC_SITE_URL recommended for OAuth redirects

Full `npm ci`/production build could not complete in the sandbox because dependency installation hit the execution transport timeout. Render remains the final full runtime/build verification environment.
