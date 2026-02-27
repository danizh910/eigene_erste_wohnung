import { promises as fs } from 'fs';
import path from 'path';

import { defaultSiteContent, type SiteContent } from '@/lib/default-content';

const CONTENT_FILE_PATH = path.join(process.cwd(), 'data', 'site-content.json');

const normalizeContent = (input: unknown): SiteContent => {
  if (!input || typeof input !== 'object') {
    return defaultSiteContent;
  }

  const rawThinkingNotes = (input as SiteContent).thinkingNotes;

  if (!rawThinkingNotes || typeof rawThinkingNotes !== 'object') {
    return defaultSiteContent;
  }

  const thinkingNotes: Record<string, string[]> = { ...defaultSiteContent.thinkingNotes };

  for (const [key, value] of Object.entries(rawThinkingNotes)) {
    if (Array.isArray(value)) {
      const cleanedLines = value
        .map((line) => (typeof line === 'string' ? line.trim() : ''))
        .filter(Boolean);

      if (cleanedLines.length > 0) {
        thinkingNotes[key] = cleanedLines;
      }
    }
  }

  return { thinkingNotes };
};

export const readSiteContent = async (): Promise<SiteContent> => {
  try {
    const fileContent = await fs.readFile(CONTENT_FILE_PATH, 'utf8');
    return normalizeContent(JSON.parse(fileContent));
  } catch {
    return defaultSiteContent;
  }
};

export const writeSiteContent = async (content: SiteContent): Promise<void> => {
  const normalizedContent = normalizeContent(content);
  await fs.mkdir(path.dirname(CONTENT_FILE_PATH), { recursive: true });
  await fs.writeFile(CONTENT_FILE_PATH, JSON.stringify(normalizedContent, null, 2), 'utf8');
};

export const updateSectionNotes = async (sectionId: string, notes: string[]): Promise<SiteContent> => {
  const content = await readSiteContent();
  const normalizedNotes = notes.map((line) => line.trim()).filter(Boolean);

  if (normalizedNotes.length === 0) {
    delete content.thinkingNotes[sectionId];
  } else {
    content.thinkingNotes[sectionId] = normalizedNotes;
  }

  await writeSiteContent(content);
  return content;
};

export const deleteSectionNotes = async (sectionId: string): Promise<SiteContent> => {
  const content = await readSiteContent();
  delete content.thinkingNotes[sectionId];
  await writeSiteContent(content);
  return content;
};
