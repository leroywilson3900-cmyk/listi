import { NextResponse } from 'next/server'

const DEMO_LISTINGS = [
  {
    id: 'lst-001',
    title: 'Nike Air Jordan 1 Retro High OG',
    description: 'Brand new, never worn. Size 10. Chicago colorway.',
    price: 185.00,
    category: 'Shoes',
    condition: 'new',
    status: 'listed',
    platforms: ['ebay', 'poshmark'],
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'],
    created_at: '2026-04-20T00:00:00Z'
  },
  {
    id: 'lst-002',
    title: "Vintage Levi's 501 Jeans",
    description: 'Classic fit, medium wash. Worn maybe 5 times. Size 32x30.',
    price: 45.00,
    category: 'Clothing',
    condition: 'like_new',
    status: 'listed',
    platforms: ['poshmark', 'mercari'],
    images: ['https://images.unsplash.com/photo-1542272604-787c3835535d?w=500'],
    created_at: '2026-04-18T00:00:00Z'
  },
  {
    id: 'lst-003',
    title: 'Apple AirPods Pro 2nd Gen',
    description: 'Like new condition. Includes case and all original accessories.',
    price: 149.00,
    category: 'Electronics',
    condition: 'like_new',
    status: 'draft',
    platforms: [],
    images: ['https://images.unsplash.com/photo-1600294037681-c80b4cb9b7f9?w=500'],
    created_at: '2026-04-22T00:00:00Z'
  },
  {
    id: 'lst-004',
    title: 'Coach Leather Crossbody Bag',
    description: 'Authentic Coach. Tan leather. Used for one season.',
    price: 89.00,
    category: 'Accessories',
    condition: 'good',
    status: 'sold',
    platforms: ['ebay', 'poshmark'],
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500'],
    created_at: '2026-04-10T00:00:00Z'
  },
]

export async function GET() {
  return NextResponse.json({
    listings: DEMO_LISTINGS,
    total: DEMO_LISTINGS.length
  })
}

export async function POST(request: Request) {
  const body = await request.json()
  const newListing = {
    id: 'lst-' + Date.now(),
    ...body,
    status: 'draft',
    platforms: [],
    created_at: new Date().toISOString()
  }
  return NextResponse.json({ listing: newListing })
}