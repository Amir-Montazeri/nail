import { GrLinkNext } from 'react-icons/gr';
import { GrLinkPrevious } from 'react-icons/gr';
import Link from 'next/link';

import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from '@/components/ui/card';
import Header from '../card-wrapper/header';
import { Button } from '@/components/ui/button';

interface ACWProps {
  children: React.ReactNode;
  stage: number;
  stageName: string;
  headerLabel: string;
  minStage: number;
  maxStage: number;
}

function AppointmentCardWrapper({
  children,
  stage,
  stageName,
  headerLabel,
  minStage,
  maxStage,
}: ACWProps) {
  return (
    <div className="max-w-6xl mx-auto mt-2 sm:px-3">
      <Card>
        <CardHeader>
          <Header title={`${stageName} / ${stage}`} label={headerLabel} />
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="flex justify-between">
          <Button size={'icon'} variant={'link'} disabled={stage === minStage}>
            <Link
              href={`http://localhost:3000/appointments?stage=${stage - 1}`}
            >
              <GrLinkPrevious />
            </Link>
          </Button>
          <Button size={'icon'} variant={'link'} disabled={stage === maxStage}>
            <Link
              href={`http://localhost:3000/appointments?stage=${stage + 1}`}
            >
              <GrLinkNext />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default AppointmentCardWrapper;
