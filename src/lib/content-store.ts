import { promises as fs } from 'fs';
import path from 'path';

import { defaultSiteContent, type SiteContent } from '@/lib/default-content';

const CONTENT_FILE_PATH = path.join(process.cwd(), 'data', 'site-content.json');

const cleanStringArray = (value: unknown): string[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.map((line) => (typeof line === 'string' ? line.trim() : '')).filter(Boolean);
};

const normalizeContent = (input: unknown): SiteContent => {
  if (!input || typeof input !== 'object') {
    return defaultSiteContent;
  }

  const candidate = input as Partial<SiteContent>;

  const thinkingNotes: Record<string, string[]> = { ...defaultSiteContent.thinkingNotes };
  if (candidate.thinkingNotes && typeof candidate.thinkingNotes === 'object') {
    for (const [key, value] of Object.entries(candidate.thinkingNotes)) {
      const cleanedLines = cleanStringArray(value);
      if (cleanedLines.length > 0) {
        thinkingNotes[key] = cleanedLines;
      }
    }
  }

  const pageContent: Record<string, string[]> = { ...defaultSiteContent.pageContent };
  if (candidate.pageContent && typeof candidate.pageContent === 'object') {
    for (const [key, value] of Object.entries(candidate.pageContent)) {
      const cleanedLines = cleanStringArray(value);
      if (cleanedLines.length > 0) {
        pageContent[key] = cleanedLines;
      }
    }
  }

  const sectionVisibility: Record<string, boolean> = { ...defaultSiteContent.sectionVisibility };
  if (candidate.sectionVisibility && typeof candidate.sectionVisibility === 'object') {
    for (const [key, value] of Object.entries(candidate.sectionVisibility)) {
      if (typeof value === 'boolean') {
        sectionVisibility[key] = value;
      }
    }
  }

  return { thinkingNotes, pageContent, sectionVisibility };
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

export const updateSectionPageContent = async (sectionId: string, lines: string[]): Promise<SiteContent> => {
  const content = await readSiteContent();
  const normalizedLines = lines.map((line) => line.trim()).filter(Boolean);

  if (normalizedLines.length === 0) {
    delete content.pageContent[sectionId];
  } else {
    content.pageContent[sectionId] = normalizedLines;
  }

  await writeSiteContent(content);
  return content;
};

export const updateSectionVisibility = async (
  sectionId: string,
  isVisible: boolean,
): Promise<SiteContent> => {
  const content = await readSiteContent();
  content.sectionVisibility[sectionId] = isVisible;
  await writeSiteContent(content);
  return content;
};

export const deleteSectionContent = async (sectionId: string): Promise<SiteContent> => {
  const content = await readSiteContent();
  delete content.thinkingNotes[sectionId];
  delete content.pageContent[sectionId];
  await writeSiteContent(content);
  return content;
};
