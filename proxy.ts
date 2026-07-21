import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function proxy(request: NextRequest) {
    const {pathname} = request.nextUrl;

    const isAdminAccessPage = pathname.startsWith('/AdminAccess');
    const isAdminPage = pathname.startsWith('/Admin');

    if (isAdminAccessPage) {
        return NextResponse.next();
    }

    if (isAdminPage) {
        const password = request.cookies.get('password')?.value;

        if (password === process.env.ADMIN_PASSWORD) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/AdminAccess', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/Admin', '/home/:path*', '/Home/:path*'],
}