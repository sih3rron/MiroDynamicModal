export const dynamic = 'force-dynamic'

export async function POST(request) {

    const req = await request.json();

    const options = {
      method: "POST",  
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
        'apikey': process.env.SUPABASE_ANON_KEY,
      },
      cache: 'no-store',
      body: JSON.stringify({ miroId: req })
    };
    
    const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/Modal-IDs`, options) 
    const data = await res.json()

    return Response.json({data});
  }