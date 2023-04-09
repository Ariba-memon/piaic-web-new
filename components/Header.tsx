'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
export default function Header() {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <>
      <div className="sticky top-0 w-full h-20 shadow-md z-[100] bg-white">
        <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 py-10">
          <Link href={'/'}>
            <Image
              src="https://www.piaic.org/static/media/Logo.fb7de414.svg"
              alt=""
              width={100}
              height={100}
              className="w-16 h-16"
            />
          </Link>
          <div>
            <ul className="hidden md:flex items-center">
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300">
                <Link href={'/'}>Home</Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300">
                <Link href={'/about'}>About</Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300">
                <Link href={'/Apply'}>Apply</Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300">
                <Link href={'/contact'}>Contact</Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray-300">
                <Link href={'/WIT'}>WIT</Link>
              </li>
            </ul>
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size="20" />
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        <div
          className={`${
            nav
              ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
              : ''
          }`}
        >
          <div
            className={`${
              nav
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }`}
          >
            <div className="flex w-full items-center justify-between">
              <Link href={'/'}>
                <Image
                  src="https://www.piaic.org/static/media/Logo.fb7de414.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-16 h-16"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            {/* <div className="border-b border-gray-300 my-5">
              <p></p>
            </div> */}
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href={'/'}>
                  <li className="py-4">Home</li>
                </Link>

                <Link href={'/about'}>
                  <li className="py-4">About</li>
                </Link>

                <Link href={'/Apply'}>
                  <li className="py-4">Apply</li>
                </Link>

                <Link href={'/contact'}>
                  <li className="py-4">Contact</li>
                </Link>
                <Link href={'/WIT'}>
                  <li className="py-4">WIT</li>
                </Link>
              </ul>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
