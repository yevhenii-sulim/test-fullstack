'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';

interface Props {
  href: string;
  page: string;
  style?: string;
}

export function NavLink({href, page, style}: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const activeLinkStyle = 'border-b border-b-border/30 text-center';
  const defaultStyle = 'text-text';

  return (
    <Link
      href={href}
      className={clsx(isActive && activeLinkStyle, defaultStyle, style)}
    >
      {page}
    </Link>
  );
}
