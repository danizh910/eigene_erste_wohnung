'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Banknote, LockKeyhole } from 'lucide-react';

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';

const menuItems = [
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
  { id: 'c', label: 'C: Ideation & Priorisierung', icon: FlaskConical },
  { id: 'c1-ideation-dokumentation', label: 'C1 Ideation-Dokumentation', icon: Circle, isSubItem: true },
  { id: 'c2-teamwork-reflexion', label: 'C2 Teamwork-Reflexion', icon: Circle, isSubItem: true },
  { id: 'c3-priorisierung-entscheid', label: 'C3 Priorisierung & Entscheid', icon: Circle, isSubItem: true },
  { id: 'd1', label: 'D1: Prototyping', icon: FileText },
  { id: 'e1', label: 'E1: Testing & Bewertung', icon: Target },
  { id: 'h1', label: 'H1: Pitch', icon: Presentation },
];
import { sectionItems } from '@/lib/section-config';
import { useSectionVisibility } from '@/hooks/use-section-visibility';

type DashboardSidebarProps = {
  activeSection: string;
};

export function DashboardSidebar({ activeSection }: DashboardSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();
  const { visibility } = useSectionVisibility();

  const visibleMenuItems = sectionItems.filter((item) => visibility[item.id] !== false);

  const handleNavigation = (section: string) => {
    router.push(`${pathname}?section=${section}`);
    setOpenMobile(false);
  };

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 p-2">
          <Banknote className="text-primary size-8" />
          <div className="flex flex-col">
            <h2 className="text-base font-semibold">UBS Sprint Hub</h2>
            <p className="text-xs text-muted-foreground">Life Moments</p>
          </div>
          <SidebarTrigger className="ml-auto" />
        </div>
      </SidebarHeader>
      <SidebarMenu className="flex-1 p-2">
        {visibleMenuItems.map((item) => (
          <SidebarMenuItem key={item.id}>
            <SidebarMenuButton
              onClick={() => handleNavigation(item.id)}
              isActive={activeSection === item.id}
              tooltip={item.label}
              className={item.isSubItem ? 'pl-8 text-xs text-muted-foreground' : ''}
            >
              <item.icon className={item.isSubItem ? 'size-3' : undefined} />
              <span>{item.label}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
      <SidebarFooter className="border-t border-sidebar-border p-3">
        <SidebarMenuButton onClick={() => router.push('/admin')}>
          <LockKeyhole className="size-4" />
          <span>Admin Bereich</span>
        </SidebarMenuButton>
        <p className="text-[10px] text-muted-foreground">&copy; 2024 ÜK Modul 368</p>
      </SidebarFooter>
    </Sidebar>
  );
}
