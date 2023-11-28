import { authMiddleware } from "@clerk/nextjs";
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware


//? export function middleware(request: NextRequest) {
//?     let path = request.nextUrl.pathname;
//?     const isPublic = path == "/login" || path == "/signUp";//? to check is the path is public path
//?     const token = request.cookies.get("token")?.value || ""; //? to get the token => only the user that sign in is have token 
//?     if (isPublic && token)
//?         NextResponse.redirect(new URL("/", request.nextUrl))
//?     if (!isPublic && !token)
//?         NextResponse.redirect(new URL("/login", request.nextUrl))
//? }



export default authMiddleware({});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
