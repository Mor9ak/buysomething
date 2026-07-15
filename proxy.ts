import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function proxy(request: NextRequest) {
    if (request.url !== 'Admin/:path*' && request.url !== '/AdminAccess/:path*') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    const pass = request.cookies.get('password')?.value;

    if (pass !== process.env.PASSWORD) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (request.url === '/AdminAccess/:path*') {
        return NextResponse.redirect(new URL('/Admin/', request.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/Admin/:path*', '/home/:path*', '/Home/:path*'],
}