import DashboardContent from '@/components/dashboard/content';
import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { DownloadPdfButton } from '@/components/dashboard/download-pdf-button';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';

type HomeProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Home({ searchParams }: HomeProps) {
  let resolvedSearchParams: Record<string, string | string[] | undefined> = {};

  if (searchParams) {
    try {
      resolvedSearchParams = await searchParams;
    } catch {
      resolvedSearchParams = {};
    }
  }
  const sectionParam = resolvedSearchParams.section;
  const section = Array.isArray(sectionParam) ? sectionParam[0] : sectionParam;
  const activeSection = section || 'a1';

  return (
    <SidebarProvider>
      <DashboardSidebar activeSection={activeSection} />
      <SidebarInset>
        <header className="sticky top-0 z-20 flex items-center gap-2 border-b bg-background/95 p-3 backdrop-blur md:hidden">
          <SidebarTrigger />
          <div className="flex flex-col">
            <p className="text-xs text-muted-foreground">Navigation</p>
            <p className="text-sm font-semibold">UBS Sprint Hub</p>
          </div>
        </header>
        <DashboardContent section={activeSection} />
      </SidebarInset>
      <DownloadPdfButton />
    </SidebarProvider>
  );
}
