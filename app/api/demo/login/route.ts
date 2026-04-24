import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  
  // Demo login - accept any credentials
  return NextResponse.json({
    success: true,
    token: 'demo-token-' + Date.now(),
    user: {
      id: 'demo-001',
      name: body.email?.split('@')[0] || 'Demo User',
      email: body.email || 'demo@listi.app',
      created_at: '2026-01-01T00:00:00Z'
    },
    mode: 'demo'
  })
}