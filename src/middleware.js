import { NextResponse } from "next/server";

export function middleware(req) {
    const { pathname } = req.nextUrl;
    const adminKey = req.cookies.get('adminKey')?.value
    if (pathname.startsWith("/Dashboard")) {
        const token = req.cookies.get("token")?.value
        if (!token) {
            return NextResponse.redirect(`${process.env.DOMAIN_NAME}/admin`)
        }
    } else if (pathname.startsWith("/admin")) {
        if (adminKey !== process.env.ADMIN_KEY) {
            return NextResponse.redirect(`${process.env.DOMAIN_NAME}`)
        }
        const token = req.cookies.get("token")?.value
        if (token) {
            return NextResponse.redirect(`${process.env.DOMAIN_NAME}/Dashboard`)
        }
    }

    return NextResponse.next()
}
