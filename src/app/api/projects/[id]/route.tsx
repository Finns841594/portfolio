import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // get id from url
  const info = request.url

  return NextResponse.json({
    message: `you are visiting project with id: ${info}`,
  })
}
