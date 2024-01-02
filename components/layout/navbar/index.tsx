import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import { Suspense } from 'react';
import Dropdown from './dropdown';
import MobileMenu from './mobile-menu';
import Search from './search';
const { SITE_NAME } = process.env;

const playfair_display = Playfair_Display({ style: 'normal', subsets: ['latin'], weight: '400' });

export default async function Navbar() {
  const menu = await getMenu('main-menu');

  return (
    <div className="border border-gray-300 bg-white lg:px-6">
      <nav className="flex w-full items-center">
        <div className="block flex-none md:hidden">
          <MobileMenu menu={menu} />
        </div>

        {menu.length ? (
          <ul className="hidden grow basis-0 gap-6 text-sm md:flex md:items-center">
            {menu.map((item: Menu) => {
              if (item.items.length) {
                return (
                  <li key={item.title} className="relative">
                    <Dropdown item={item} submenus={item.items} />
                  </li>
                );
              }
              return (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="py-3 text-base font-light tracking-wide text-neutral-500 underline-offset-4 hover:text-neutral-800 hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}

        <Link href="/" className="md:w-auto lg:mr-6">
          {/* <LogoSquare /> */}
          <div
            className={`text-lg font-medium uppercase md:hidden lg:block ${playfair_display.className}`}
          >
            {SITE_NAME}
          </div>
        </Link>

        <div className="flex grow basis-0 items-center justify-end">
          <div className="hidden md:block">
            <Search />
          </div>
          <div>
            <Suspense fallback={<OpenCart />}>
              <Cart />
            </Suspense>
          </div>
        </div>
      </nav>
    </div>
  );
}
