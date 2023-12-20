'use client';

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { createUrl } from 'lib/utils';
import { Playfair_Display } from 'next/font/google';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const playfair_display = Playfair_Display({ style: 'normal', subsets: ['latin'], weight: '400' });

export default function Search() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set('q', search.value);
    } else {
      newParams.delete('q');
    }

    router.push(createUrl('/search', newParams));
  }

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 top-0 z-10  bg-black opacity-40 ${
          isModalOpen ? 'visible' : 'hidden'
        }`}
      ></div>
      <button className="mr-3 block" onClick={() => setIsModalOpen(true)}>
        <MagnifyingGlassIcon className="h-6 text-gray-900" />
      </button>

      <form
        onSubmit={onSubmit}
        className={`fixed right-0 top-0 z-20 w-full transform bg-white transition-transform duration-200 ease-linear ${
          isModalOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container relative mx-auto flex items-center justify-between py-12">
          <div onClick={() => setIsModalOpen(false)} className="cursor-pointer">
            <XMarkIcon className="absolute right-0 top-10 h-6 text-gray-400" />
          </div>
          <div className=" w-full border-b border-gray-300 pb-6">
            <span className=" mb-3 inline-block text-xs uppercase tracking-wide text-gray-400">
              What are you looking for?
            </span>
            <input
              key={searchParams?.get('q')}
              type="text"
              name="search"
              placeholder="Search for products..."
              autoComplete="off"
              defaultValue={searchParams?.get('q') || ''}
              className={`w-full text-2xl tracking-wide ${playfair_display.className} placeholder:text-gray-500 focus:border-0 focus:outline-none`}
            />
          </div>
        </div>
      </form>
    </>
  );
}
