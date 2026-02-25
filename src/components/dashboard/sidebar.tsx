'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import {
  Home,
  FileText,
  Target,
  FlaskConical,
  Presentation,
  CheckCircle,
  Bot,
  Banknote,
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
  { id: 'b1', label: 'B1: Erfolgskriterien', icon: CheckCircle },
  { id: 'tag2', label: 'Tag 2: Ideation', icon: FlaskConical },
  { id: 'tag3', label: 'Tag 3: Prototyping', icon: FileText },
  { id: 'tag4', label: 'Tag 4: Testing', icon: Target },
  { id: 'tag5', label: 'Tag 5: Pitch Deck', icon: Presentation },
  { id: 'smart-goal-generator', label: 'SMART Goal Generator', icon: Bot },
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
              tooltip={{children: item.label, side: 'right'}}
            >
              <item.icon />
              <span>{item.label}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <p className="text-xs text-muted-foreground">&copy; 2024 ÜK Modul 368</p>
      </SidebarFooter>
    </Sidebar>
  );
}
