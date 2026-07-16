import {NextResponse, NextRequest} from "next/server";

export async function POST(request: NextRequest) {
    const formData = await request.formData();
    const password = formData.get('password')?.toString();

    if (!password) {
        return NextResponse.json(
            {error: "Password is required"},
            {status: 400}
        );
    }

    const response = NextResponse.json({success: true});
    response.cookies.set('password', password,{
        httpOnly: true,
        maxAge: 60 * 60,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/'
    });

    return response;
}