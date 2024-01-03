'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Props {
  item: {
    title: string;
    url: string;
  };
  submenus: {
    title: string;
    url: string;
  }[];
}

const domain = 'https://4215b7-3.myshopify.com';

const Dropdown = ({ item, submenus }: Props) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <Link
        href={'/'}
        aria-haspopup="menu"
        aria-expanded={dropdown ? 'true' : 'false'}
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
        className="nav-link relative inline-block p-6"
      >
        {item.title}
      </Link>
      <div
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
        className={`border-1 absolute left-0 right-auto z-30 m-0 block min-w-[270px] border-gray-900 bg-white p-0 transition-all duration-150 ease-linear ${
          dropdown ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="relative mx-auto my-0 list-none border-t border-gray-300 p-8">
          {submenus.map((submenu, index) => {
            const path = submenu.url.replace(domain, '').replace('/pages', '');
            console.log(path);
            return (
              <li
                key={index}
                className="hover:text-primary px-2 py-3 text-base font-light tracking-wide text-gray-500 transition-colors duration-150 ease-linear"
              >
                <Link href={path}>{submenu.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Dropdown;
