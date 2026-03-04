import { NextResponse } from 'next/server';

import {
  deleteSectionContent,
  updateSectionNotes,
  updateSectionPageContent,
  updateSectionVisibility,
} from '@/lib/content-store';

export const dynamic = 'force-dynamic';

type RouteContext = {
  params: Promise<{ sectionId: string }>;
};

export async function PUT(request: Request, context: RouteContext) {
  const { sectionId } = await context.params;
  const body = (await request.json().catch(() => null)) as
    | { notes?: unknown; pageContent?: unknown }
    | null;

  if (!body) {
    return NextResponse.json({ error: 'Ungültiger Request-Body.' }, { status: 400 });
  }

  let content = null;

  if (Array.isArray(body.notes)) {
    content = await updateSectionNotes(sectionId, body.notes.filter((item) => typeof item === 'string'));
  }

  if (Array.isArray(body.pageContent)) {
    content = await updateSectionPageContent(
      sectionId,
      body.pageContent.filter((item) => typeof item === 'string'),
    );
  }

  if (!content) {
    return NextResponse.json({ error: 'Keine gültigen Felder übergeben.' }, { status: 400 });
  }

  return NextResponse.json(content);
}

export async function PATCH(request: Request, context: RouteContext) {
  const { sectionId } = await context.params;
  const body = (await request.json().catch(() => null)) as { isVisible?: unknown } | null;

  if (!body || typeof body.isVisible !== 'boolean') {
    return NextResponse.json({ error: 'Ungültiger Request-Body.' }, { status: 400 });
  }

  const content = await updateSectionVisibility(sectionId, body.isVisible);
  return NextResponse.json(content);
}

export async function DELETE(_request: Request, context: RouteContext) {
  const { sectionId } = await context.params;
  const content = await deleteSectionContent(sectionId);
  return NextResponse.json(content);
}
