'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import {
  Home,
  FileText,
  Target,
  FlaskConical,
  Presentation,
  CheckCircle,
  Banknote,
  Circle,
} from 'lucide-react';

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
  { id: 'c1', label: 'C1: Ideation', icon: FlaskConical },
  { id: 'd1', label: 'D1: Prototyping', icon: FileText },
  { id: 'e1', label: 'E1: Testing & Bewertung', icon: Target },
  { id: 'h1', label: 'H1: Pitch', icon: Presentation },
];

export function DashboardSidebar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeSection = searchParams.get('section') || 'a1';
  const { setOpenMobile } = useSidebar();

  const handleNavigation = (section: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('section', section);
    router.push(`${pathname}?${params.toString()}`);
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
        {menuItems.map((item) => (
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
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <p className="text-[10px] text-muted-foreground">&copy; 2024 ÜK Modul 368</p>
      </SidebarFooter>
    </Sidebar>
  );
}
