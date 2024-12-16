import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(request) {
    const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/form-schema`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization':` Bearer ${process.env.SUPABASE_ANON_KEY}`,
        'apikey': process.env.SUPABASE_ANON_KEY,
      },
      cache: 'no-store',
    })
    const data = await res.json()
   
    return NextResponse.json(data);
  }