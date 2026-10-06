# Form & Interactive Backend Audit

The production UI submissions and state-changing controls were checked against their backend routes and admin visibility.

| UI | Backend | Persistence / admin visibility |
|---|---|---|
| Login / signup | `/api/auth/login`, `/api/auth/signup` | `User` + `ActivityEvent`; admin Users / Activity |
| Forgot password | `/api/auth/forgot-password` | `PasswordResetToken` + `ActivityEvent`; admin Activity |
| Reset password | `/api/auth/reset-password` | `User.passwordHash` + `ActivityEvent`; admin Activity |
| Exam selection | `/api/profile/exam-choice` | `User.examChoice` + `ActivityEvent`; admin Users / User Detail |
| Free Mock Challenge | `/api/challenge/register` | `ChallengeRegistration` + `ActivityEvent`; admin Challenge |
| Mock submission | `/api/attempts` | `Attempt` + `ActivityEvent`; admin Attempts / User Detail |
| Mentor booking | `/api/razorpay/order` + `/api/razorpay/verify` | `Booking` + `ActivityEvent`; admin Payments / User Detail |
| Prep / Mentor purchase | `/api/razorpay/order` + `/api/razorpay/verify` | `PlanAccess` + `ActivityEvent`; admin Payments / Users / User Detail |
| Restore purchase | `/api/pass/restore` | `PlanAccess` + `ActivityEvent`; admin Payments / Users |
| Create admin | `/api/admin/admins` | `User`, optional `PlanAccess`, `ActivityEvent`; admin Admins / Users / Activity |
| Promote / demote / assign plan | `/api/admin/users/[id]` | `User`, `PlanAccess`, `ActivityEvent`; admin Users / User Detail / Activity |
| Pricing settings | `/api/admin/settings/pricing` | `PricingConfig` + `ActivityEvent`; admin Settings / Activity |
| Anonymous page views | `/api/activity` | `GuestVisit` / `ActivityEvent`; admin Visitors / Overview |

Search, filter, language, navigation and mock-answer controls are client-side interaction controls rather than lead/application forms. Their intended state is local or URL-driven and they do not silently discard a server submission.
