import {
  Home,
  FileText,
  Target,
  FlaskConical,
  Presentation,
  CheckCircle,
  Circle,
} from 'lucide-react';

export type SectionItem = {
  id: string;
  label: string;
  icon: typeof Home;
  isSubItem?: boolean;
};

export const sectionItems: SectionItem[] = [
  { id: 'a1', label: 'A1: Situationsanalyse', icon: Home },
  { id: 'a1-ist-analyse', label: 'A1.1 Ist-Analyse', icon: Circle, isSubItem: true },
  { id: 'a1-stakeholder-map', label: 'A1.2 Stakeholder-Map', icon: Circle, isSubItem: true },
  { id: 'a1-customer-journey', label: 'A1.3 Customer Journey', icon: Circle, isSubItem: true },
  { id: 'a1-zieldefinition', label: 'A1.4 Zieldefinition', icon: Circle, isSubItem: true },
  { id: 'b1', label: 'B1: Erfolgskriterien', icon: CheckCircle },
  { id: 'b1-executive-summary', label: 'B1.1 Executive Summary', icon: Circle, isSubItem: true },
  { id: 'b1-hmw-smart', label: 'B1.2 HMW & SMART', icon: Circle, isSubItem: true },
  { id: 'b1-erfolgskriterien-review', label: 'B1.3 Kriterien & Review', icon: Circle, isSubItem: true },
  { id: 'b1-test-evidenz', label: 'B1.4 Test-Evidenz', icon: Circle, isSubItem: true },
  { id: 'b1-export', label: 'B1.5 Export', icon: Circle, isSubItem: true },
  { id: 'c1', label: 'C1: Ideation', icon: FlaskConical },
  { id: 'd1', label: 'D1: Prototyping', icon: FileText },
  { id: 'e1', label: 'E1: Testing & Bewertung', icon: Target },
  { id: 'h1', label: 'H1: Pitch', icon: Presentation },
];

export const defaultSection = 'a1';
export const sectionVisibilityStorageKey = 'section-visibility';
