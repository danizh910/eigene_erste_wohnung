'use client';

import Link from 'next/link';
import { Shield } from 'lucide-react';

import { Button } from '@/components/ui/button';

const adminPath = process.env.NEXT_PUBLIC_ADMIN_PATH || '/dokumentation';

export function AdminAreaButton() {
  return (
    <Button asChild className="fixed top-4 right-4 z-50 gap-2 shadow-lg print:hidden">
      <Link href={adminPath}>
        <Shield className="size-4" aria-hidden="true" />
        Zum Admin-Bereich
      </Link>
    </Button>
  );
}
