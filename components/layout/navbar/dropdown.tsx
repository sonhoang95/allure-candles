'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Props {
  item: {
    title: string;
  };
  submenus: {
    title: string;
    url: string;
  }[];
}

const Dropdown = ({ item, submenus }: Props) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <Link
        href={'/about'}
        aria-haspopup="menu"
        aria-expanded={dropdown ? 'true' : 'false'}
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
        className="relative inline-block py-8 text-base"
      >
        {item.title}
      </Link>
      <div
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
        className={`border-1 absolute left-0 right-auto z-10 m-0 block min-w-[270px] border-gray-900 bg-white p-0 transition-all duration-150 ease-linear ${
          dropdown ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="relative mx-auto my-0 list-none border-t border-gray-300 p-8">
          {submenus.map((submenu, index) => (
            <li key={index} className="px-2 py-3 text-base">
              <Link href={submenu.url}>{submenu.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Dropdown;
