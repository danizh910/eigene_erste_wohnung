'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Banknote, LockKeyhole } from 'lucide-react';

import { useSectionVisibility } from '@/hooks/use-section-visibility';
import { sectionItems } from '@/lib/section-config';
import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';

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
