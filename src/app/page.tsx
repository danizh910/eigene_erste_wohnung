import DashboardContent from '@/components/dashboard/content';
import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { DownloadPdfButton } from '@/components/dashboard/download-pdf-button';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

type HomeProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const sectionParam = resolvedSearchParams.section;
  const section = Array.isArray(sectionParam) ? sectionParam[0] : sectionParam;
  const activeSection = section || 'a1';

  return (
    <SidebarProvider>
      <DashboardSidebar activeSection={activeSection} />
      <SidebarInset>
        <DashboardContent section={activeSection} />
      </SidebarInset>
      <DownloadPdfButton />
    </SidebarProvider>
  );
}
