import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
 
export async function GET(request: NextApiRequest) {  
  // get id from url
  const info = request.url;

  return NextResponse.json({ message: `you are visiting project with id: ${info}` });
}