'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { MaxWidthWrapper } from '@/features';
import { Button, buttonVariants } from '../ui/button';
import { useCurrentUser } from '@/hooks';
import { signOut } from 'next-auth/react';

const Navbar = () => {
  const { user, status } = useCurrentUser();
  const authenticated = status === 'authenticated',
    isAdmin = user?.role === 'ADMIN';

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            Azin<span className="text-violet-600">Nail</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            {authenticated ? (
              <>
                <Button onClick={() => signOut()} size={'sm'} variant={'ghost'}>
                  Sign out
                </Button>
                {isAdmin && (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: 'sm',
                      variant: 'ghost',
                    })}
                  >
                    Dashboard ✨
                  </Link>
                )}
              </>
            ) : (
              <>
                <Link
                  href="/register"
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}
                >
                  Sign up
                </Link>
                <Link
                  href="/login"
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}
                >
                  Login
                </Link>
              </>
            )}
            <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
            <Link
              href="/appointments"
              className={buttonVariants({
                size: 'sm',
                className: 'hidden sm:flex items-center gap-1',
              })}
            >
              Book appointment
              <ArrowRight className="ml-1.5 h-5 w-5" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
