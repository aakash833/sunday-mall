import { NextResponse } from "next/server";
import Cookies from "js-cookie";

const PUBLIC_PATHS = ["/login", "/register"]; // Define public paths

export function middleware(request) {
    const accessToken = request.cookies.get("access_token");

    // Check if the path is public
    const isPublicPath = PUBLIC_PATHS.includes(request.nextUrl.pathname);

    // If the user is not authenticated and trying to access a private route, redirect to /login
    if (!accessToken && !isPublicPath) {
        const loginUrl = new URL("/login", request.url);
        return NextResponse.redirect(loginUrl);
    }

    // If the user is authenticated and trying to access a public route (like login), redirect to /dashboard
    if (accessToken && isPublicPath) {
        const privatePath = new URL("/", request.url);
        return NextResponse.redirect(privatePath);
    }

    // Continue with the request if the user is allowed to access the route
    return NextResponse.next();
}

// Enable middleware for specific routes (optional)
// For example, middleware only runs for certain routes, excluding static files
export const config = {
    matcher: ["/dashboard/:path*", "/login", "/"], // Define the routes to apply middleware on
};