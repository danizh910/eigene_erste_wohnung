'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { sectionItems } from '@/lib/section-config';
import { useSectionVisibility } from '@/hooks/use-section-visibility';

const ADMIN_CODE = '123456';

export default function AdminPage() {
  const [code, setCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');
  const { visibility, setSectionVisibility, visibleSectionIds } = useSectionVisibility();

  const visibleCount = useMemo(() => visibleSectionIds.length, [visibleSectionIds]);

  const handleUnlock = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (code === ADMIN_CODE) {
      setIsUnlocked(true);
      setError('');
      return;
    }

    setError('Falscher Code. Bitte versuche es erneut.');
  };

  const handleVisibilityChange = (sectionId: string, nextChecked: boolean) => {
    if (!nextChecked && visibleCount <= 1 && visibility[sectionId] !== false) {
      return;
    }

    setSectionVisibility(sectionId, nextChecked);
  };

  if (!isUnlocked) {
    return (
      <main className="mx-auto flex min-h-svh w-full max-w-md items-center justify-center p-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Admin Bereich</CardTitle>
            <CardDescription>Bitte gib den Admin-Code ein, um Seiten ein- oder auszublenden.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUnlock} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-code">Code</Label>
                <Input
                  id="admin-code"
                  type="password"
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                  placeholder="Admin-Code"
                />
              </div>
              {error ? <p className="text-sm text-destructive">{error}</p> : null}
              <Button type="submit" className="w-full">
                Freischalten
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/">Zurück zur Startseite</Link>
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-3xl p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle>Seitenverwaltung</CardTitle>
          <CardDescription>
            Aktiviere oder deaktiviere Unterseiten, die normale Besucher in der Navigation sehen sollen.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {sectionItems.map((item) => {
            const isVisible = visibility[item.id] !== false;
            const disableSwitch = isVisible && visibleCount <= 1;

            return (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 rounded-md border px-3 py-2"
              >
                <p className={item.isSubItem ? 'pl-4 text-sm text-muted-foreground' : 'text-sm font-medium'}>
                  {item.label}
                </p>
                <Switch
                  checked={isVisible}
                  onCheckedChange={(checked) => handleVisibilityChange(item.id, checked)}
                  disabled={disableSwitch}
                />
              </div>
            );
          })}
          <Button asChild variant="outline" className="mt-4 w-full">
            <Link href="/">Zurück zur Startseite</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
