'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useEffect } from 'react';

import { Link } from '@/components/ui/link';
import { useUser } from '@/lib/auth';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

// export const metadata = {
//   title: 'Bulletproof React',
//   description: 'Welcome to bulletproof react',
// };

export const AuthLayout = ({ children, title }: LayoutProps) => {
  const user = useUser();

  const router = useRouter();

  useEffect(() => {
    if (user.data) {
      router.replace('/app');
    }
  }, [user.data, router]);

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Link className="flex items-center text-white" href="/">
            <img className="h-24 w-auto" src="/logo.svg" alt="Workflow" />
          </Link>
        </div>

        <h2 className="mt-3 text-center text-3xl font-extrabold text-gray-900">
          {title}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          {children}
        </div>
      </div>
    </div>
  );
};
