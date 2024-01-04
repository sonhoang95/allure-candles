import Link from 'next/link';

import FooterMenu from 'components/layout/footer-menu';
import { getMenu } from 'lib/shopify';
import { Suspense } from 'react';
import { playfair_display } from './navbar';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  // const currentYear = new Date().getFullYear();
  // const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('footer');
  // const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="bg-[#f2eee9] py-32 text-gray-800">
      <div className="mx-auto md:w-[1280px]">
        <div className="flex flex-col gap-6 px-4 md:flex-row lg:px-0">
          <div
            className={`font-medium uppercase md:hidden md:flex-1 lg:block ${playfair_display.className}`}
          >
            <Link
              className="flex items-center gap-2 text-2xl text-gray-800 md:pt-1 md:text-3xl"
              href="/"
            >
              <span className="uppercase">{SITE_NAME}</span>
            </Link>
          </div>
          <div className="md:flex-1">
            <h2
              className={`${playfair_display.className} mb-10 text-xl font-light capitalize tracking-wide`}
            >
              Contact Us
            </h2>
            <p className="my-6">
              By Appointment Only 24/10-12 Girawah Place, Matraville, Sydney, 2036
            </p>
            <p>E-mail: hello@sentstudio.co</p>
          </div>
          <div className="space-y-3 md:flex-1">
            <h2
              className={`${playfair_display.className} mb-10 text-xl font-light capitalize tracking-wide`}
            >
              Looking for something?
            </h2>
            <Suspense
              fallback={
                <div className="flex h-[188px] w-[200px] flex-col gap-2">
                  <div className={skeleton} />
                  <div className={skeleton} />
                  <div className={skeleton} />
                  <div className={skeleton} />
                  <div className={skeleton} />
                  <div className={skeleton} />
                </div>
              }
            >
              <FooterMenu menu={menu} />
            </Suspense>
          </div>
          <div className="space-y-3 md:flex-1">
            <h2
              className={`${playfair_display.className} mb-10 text-xl font-light capitalize tracking-wide`}
            >
              Join the family!
            </h2>
            <p>
              Pop your email down to get cute emails on new launches, specials, discounts and more.
            </p>
          </div>
        </div>
        {/* <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
            <p>
              &copy; {copyrightDate} {copyrightName}
              {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
            </p>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
