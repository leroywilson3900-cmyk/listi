import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    total_listings: 4,
    active: 2,
    sold: 1,
    draft: 1,
    total_value: 468,
    platforms_connected: 2
  })
}