import { NextResponse } from 'next/server';

import { deleteSectionNotes, updateSectionNotes } from '@/lib/content-store';

export const dynamic = 'force-dynamic';

type RouteContext = {
  params: Promise<{ sectionId: string }>;
};

export async function PUT(request: Request, context: RouteContext) {
  const { sectionId } = await context.params;
  const body = (await request.json().catch(() => null)) as { notes?: unknown } | null;

  if (!body || !Array.isArray(body.notes)) {
    return NextResponse.json({ error: 'Ungültiger Request-Body.' }, { status: 400 });
  }

  const content = await updateSectionNotes(sectionId, body.notes.filter((item) => typeof item === 'string'));
  return NextResponse.json(content);
}

export async function DELETE(_request: Request, context: RouteContext) {
  const { sectionId } = await context.params;
  const content = await deleteSectionNotes(sectionId);
  return NextResponse.json(content);
}
