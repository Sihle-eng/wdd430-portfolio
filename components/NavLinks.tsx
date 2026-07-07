'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-6">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:underline transition ${
                isActive ? 'font-bold underline' : ''
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}