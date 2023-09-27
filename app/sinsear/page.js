/** Global Imports **/

import React from 'react';
import Image from 'next/image';

/** Local imports **/

import './styles.css';
import { MenuIcon } from 'components';

export default function Home() {
  return (
    <div>
      <div className="h-16">
        <nav className="flex justify-between items-center text-white px-5 py-3 text-sm absolute top-0 left-0 right-0">
          <div>
            <Image 
              className="h-8"
              src="/img/kxblade.png"
              width="32"
              height="32"
            />
          </div>
          <div className="text-md hidden md:block">
            <a href="One" className="mx-2 text-white hover:text-gray-400">One</a>
            <a href="Two" className="mx-2 text-white hover:text-gray-400">Two</a>
            <a href="Three" className="mx-2 text-white hover:text-gray-400">Three</a>
            <a href="Four" className="mx-2 text-white hover:text-gray-400">Four</a>
            <a href="Five" className="mx-2 text-white hover:text-gray-400">Five</a>
          </div>
          <div className="flex items-center mx-2 text-md text-white hover:text-gray-400">
            <a href="Six" className="mx-2 text-white hover:text-gray-400">Six</a>
            <a href="Seven" className="mx-2 text-white hover:text-gray-400">Seven</a>
            <MenuIcon className="fill-white" />
          </div>
        </nav>
      </div>
      <div className="bg-gradient-to-t from-[#040D12] from-3% via-[#313866] via-90% to-[#352F44] to-95% h-screen">
      </div>
    </div>
  );
}
