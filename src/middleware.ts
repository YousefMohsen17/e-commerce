import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const authPages = ["/sign-in", "/sign-up"];
  const routes = [
    "/",
    "/cart",
    "/product-details",
    // "/categories",
    // "/brands",
    // "products",
    // "wishlist",
  ];
  if (!token && routes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  if (token && authPages.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/cart",
    "/sign-in",
    "/sign-up",
    "/product-details",
    // "/categories",
    // "/brands",
    // "/products",
    // "/wishlist",
  ],
};
