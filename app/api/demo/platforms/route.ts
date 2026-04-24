import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    platforms: [
      { id: 'ebay', name: 'eBay', connected: true, username: 'demo_seller' },
      { id: 'poshmark', name: 'Poshmark', connected: true, username: 'demo_posh' },
      { id: 'mercari', name: 'Mercari', connected: false, username: null }
    ]
  })
}