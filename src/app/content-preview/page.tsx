import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { readContentNotes } from '@/lib/content-notes';

export const runtime = 'nodejs';

export default async function ContentPreviewPage() {
  const notes = await readContentNotes();

  return (
    <main className="mx-auto w-full max-w-4xl space-y-6 p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle>Content Preview (Decap)</CardTitle>
          <CardDescription>
            Diese Ansicht liest alle JSON-Dateien aus <code>content/notes</code> serverseitig ein.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            CMS öffnen: <Link href="/cms" className="underline">/cms</Link>
          </p>

          {notes.length === 0 ? (
            <p className="text-sm">Keine Notes gefunden.</p>
          ) : (
            <div className="space-y-3">
              {notes.map((note) => (
                <article key={note.id} className="rounded-md border p-3">
                  <h2 className="font-semibold">{note.title}</h2>
                  <p className="text-xs text-muted-foreground">ID: {note.id}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                    {note.lines.map((line, index) => (
                      <li key={`${note.id}-${index}`}>{line}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
