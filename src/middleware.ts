import { ROUTES } from "./lib/routes";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getAuthCredentials } from "./lib/auth-utils";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const uploadId = await getAuthCredentials(request);

  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", pathname);

  if (!uploadId) {
    if (pathname.includes(ROUTES.LOGIN)) return;
    return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url));
  }
  if ([ROUTES.LOGIN].includes(pathname))
    return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
  return NextResponse.next({
    headers: requestHeaders,
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "next-action" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
