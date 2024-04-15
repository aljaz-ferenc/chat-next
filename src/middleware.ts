import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/auth/sign-up', '/auth/sign-in', '/', '/api/webhooks/clerk']
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};