import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import Image from 'next/image';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-[600px] bg-black-500 flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-5 items-end justify-start rounded-md bg-black-500 p-4 md:h-35"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <Image src='/xp.png' width={50} height={35} alt='logo' />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-black-400 p-3 text-sm  font-medium hover:bg-green-100 hover:text-green-100 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6 text-white-100" />
            <div className="hidden  md:block text-white-100">Log Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
