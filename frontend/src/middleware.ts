import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const basicAuth = handleBasicAuth(request)
  if (basicAuth) {
    return basicAuth
  }

  // if (request.nextUrl.pathname.startsWith('/about')) {
  //   // This logic is only applied to /about
  // }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
}

function handleBasicAuth(req: NextRequest) {
  if (!process.env.BASIC_AUTH_USER || !process.env.BASIC_AUTH_PASSWORD) {
    return NextResponse.next()
  }

  const url = req.nextUrl

  const basicAuth = req.headers.get('authorization')

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, password] = atob(auth).split(':')

    if (user === process.env.BASIC_AUTH_USER && password === process.env.BASIC_AUTH_PASSWORD) {
      return NextResponse.next()
    }
  }

  url.pathname = '/api/auth'
  return NextResponse.rewrite(url)
}
