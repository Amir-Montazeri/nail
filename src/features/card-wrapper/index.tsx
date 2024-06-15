'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Header from './header';
import BackButton from './back-button';

interface CWProps {
  children: React.ReactNode;
  headerTitle: string;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  SocialComponent?: React.ElementType;
}

function CardWrapper({
  children,
  headerTitle,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  SocialComponent,
}: CWProps) {
  return (
    <Card className="w-96 shadow-md">
      <CardHeader>
        <Header title={headerTitle} label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {SocialComponent && (
        <CardFooter>
          <SocialComponent />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
}

export default CardWrapper;
