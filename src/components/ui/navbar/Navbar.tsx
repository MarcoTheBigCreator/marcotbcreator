'use client';

import { Logo } from '@/components/logo/Logo';
import Link from 'next/link';
import {
  IoCloseOutline,
  IoDownload,
  IoDownloadOutline,
  IoReorderTwoOutline,
} from 'react-icons/io5';
import { LaguageButton } from '../laguange-button/LaguageButton';
import { useUIStore } from '@/store';
import { useState } from 'react';
import { languages } from '@/locales';
import { titleFont } from '@/config/fonts';
import { navItemsProps } from '@/interfaces/navInterface';

export const Navbar = ({ navItems, href }: navItemsProps) => {
  const openMenu = useUIStore((state) => state.openSideMenu);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);

  const [isResumeOnHover, setIsResumeOnHover] = useState(false);

  return (
    <nav className="grid grid-cols-1 lg:grid-cols-7 gap-4 backdrop-blur-3xl fixed top-0 left-0 right-0 z-50 bg-black opacity-95 p-2 center w-full items-center">
      {/* Mobile Menu */}
      <div className="lg:hidden justify-start transition-all">
        {isSideMenuOpen ? (
          <button
            id="close-menu"
            aria-label="Close Menu"
            onClick={closeMenu}
            className="p-2 text-white font-medium"
          >
            <IoCloseOutline size={40} />
          </button>
        ) : (
          <button
            id="open-menu"
            aria-label="Open Menu"
            onClick={openMenu}
            className="p-2 text-white font-medium"
          >
            <IoReorderTwoOutline size={40} />
          </button>
        )}
      </div>

      {/* Brand */}
      <div className="hidden lg:flex col-span-2 justify-center">
        <Link
          href="/"
          className={`${titleFont.className} flex text-lg font-semibold gap-2 text-white hover:text-violet-600 transition duration-200 ease-linear`}
        >
          <Logo width={25} height={25} color="white" />
          MarcoTheBigCreator
        </Link>
      </div>
      {/* Navigation */}
      <div className="hidden lg:flex col-span-3 justify-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="m-2 px-5 p-2 flex align-middle justify-center hover:shadow-[0_6px_20px_rgba(140,0,255,55%)] hover:bg-violet-700 rounded-full text-white font-medium transition duration-200 ease-linear"
          >
            {item.name}
          </Link>
        ))}
        <Link
          href={href}
          className="m-2 p-2 flex align-middle justify-center hover:shadow-[0_6px_20px_rgba(140,0,255,55%)] hover:bg-violet-700 rounded-full text-white font-medium transition duration-200 ease-linear"
          onMouseEnter={() => setIsResumeOnHover(true)}
          onMouseLeave={() => setIsResumeOnHover(false)}
        >
          {isResumeOnHover ? (
            <IoDownload size={20} className="mr-1" />
          ) : (
            <IoDownloadOutline size={20} className="mr-1" />
          )}
          CV
        </Link>
      </div>
      {/* Resume Button */}
      <div className="hidden lg:flex col-span-2 gap-4 justify-center">
        {languages.map((language) => (
          <LaguageButton
            key={language.name}
            text={language.name}
            href={language.href}
          />
        ))}
      </div>
    </nav>
  );
};
