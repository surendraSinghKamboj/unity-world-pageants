import { NextResponse, NextRequest } from 'next/server';

export function auth(request) {
    request.cookies.get('token')?.value;
    request.cookies.getAll();

    const response = NextResponse.next();
    response.cookies.set('token', 'some-value');

    response.cookies.set({
        name: 'token',
        value: 'some-value',
        httpOnly: true,
    });

    response.cookies.delete('myCookieName');
    return response;
}