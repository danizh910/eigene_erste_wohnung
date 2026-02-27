import { NextResponse } from 'next/server';

import { readSiteContent } from '@/lib/content-store';

export const dynamic = 'force-dynamic';

export async function GET() {
  const content = await readSiteContent();
  return NextResponse.json(content);
}
