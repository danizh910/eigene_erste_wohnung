'use client';

import { FileDown } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function DownloadPdfButton() {
  const handleDownloadPdf = () => {
    window.print();
  };

  return (
    <Button
      type="button"
      onClick={handleDownloadPdf}
      className="fixed bottom-4 right-4 z-50 gap-2 shadow-lg print:hidden"
    >
      <FileDown className="size-4" aria-hidden="true" />
      Als PDF speichern
    </Button>
  );
}
