import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Construction } from 'lucide-react';

type PlaceholderProps = {
  title: string;
};

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">{title}</h1>
      <Card className="flex flex-col items-center justify-center min-h-[50vh] text-center bg-card/50 border-dashed">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-muted-foreground">
            <Construction className="size-8" />
            <span>In Arbeit</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Dieser Bereich wird in den kommenden Tagen des Sprints gefüllt.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
