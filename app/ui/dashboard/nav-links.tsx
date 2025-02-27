"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';



import { Dashboard, Done, Settings,AttachMoney ,Business, AddShoppingCart} from "@styled-icons/material";
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Overview', href: '/dashboard', icon: Dashboard },
  {
    name: 'Convert',
    href: '/dashboard/convert',
    icon:  Done,
  },
  {
    name: 'Swap',
    href: '/dashboard/swap',
    icon: AddShoppingCart,
  },
  {
    name: 'Withdraw',
    href: '/dashboard/withdraw',
    icon: AttachMoney,
  },
  {
    name: 'Transaction',
    href: '/dashboard/transaction',
    icon: Business,
  },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];


export default function NavLinks() {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[28px] grow items-center justify-center gap-4 rounded-md bg-black-400 text-white-100 p-3 text-sm font-medium hover:bg-green-100 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-black-600 text-white-600': pathName === link.href,
              },
            )}
          
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
      <Image src="/sideNav.png" width={140} height={150} alt="" className="hidden md:block" />
    </>
  );
}

