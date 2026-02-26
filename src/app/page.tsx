import { Suspense } from 'react';
import DashboardContent from '@/components/dashboard/content';
import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  return (
    <SidebarProvider>
      <Suspense fallback={<SidebarLoading />}>
        <DashboardSidebar />
      </Suspense>
      <SidebarInset>
        <Suspense fallback={<DashboardLoading />}>
          <DashboardContent />
        </Suspense>
      </SidebarInset>
    </SidebarProvider>
  );
}

function SidebarLoading() {
  return (
    <div className="w-64 border-r border-sidebar-border p-4 hidden md:block animate-pulse">
      <Skeleton className="h-8 w-40 mb-6" />
      <div className="space-y-3">
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
      </div>
    </div>
  );
}

function DashboardLoading() {
  return (
    <div className="p-4 md:p-8 animate-pulse">
      <Skeleton className="h-8 w-1/3 mb-6" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Skeleton className="h-64 lg:col-span-2" />
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
      </div>
    </div>
  )
}
