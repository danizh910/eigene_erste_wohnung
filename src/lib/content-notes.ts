import { promises as fs } from 'fs';
import path from 'path';

export type ContentNote = {
  id: string;
  title: string;
  lines: string[];
  updated_at?: string;
};

const NOTES_DIRECTORY = path.join(process.cwd(), 'content', 'notes');

const isValidNote = (input: unknown): input is ContentNote => {
  if (!input || typeof input !== 'object') {
    return false;
  }

  const candidate = input as Partial<ContentNote>;

  return (
    typeof candidate.id === 'string' &&
    typeof candidate.title === 'string' &&
    Array.isArray(candidate.lines) &&
    candidate.lines.every((line) => typeof line === 'string') &&
    (candidate.updated_at === undefined || typeof candidate.updated_at === 'string')
  );
};

export const readContentNotes = async (): Promise<ContentNote[]> => {
  try {
    const entries = await fs.readdir(NOTES_DIRECTORY, { withFileTypes: true });
    const noteFiles = entries
      .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
      .map((entry) => entry.name)
      .sort((left, right) => left.localeCompare(right));

    const notes = await Promise.all(
      noteFiles.map(async (fileName) => {
        const filePath = path.join(NOTES_DIRECTORY, fileName);
        const raw = await fs.readFile(filePath, 'utf8');
        const parsed: unknown = JSON.parse(raw);

        if (!isValidNote(parsed)) {
          return null;
        }

        return {
          ...parsed,
          lines: parsed.lines.map((line) => line.trim()).filter(Boolean),
        };
      }),
    );

    return notes.filter((note): note is ContentNote => Boolean(note));
  } catch {
    return [];
  }
};
