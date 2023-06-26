"use client";
import { useState } from 'react'
import logo from '../../public/assets/logo.png'
import Image from 'next/image'
import closeIcon from '../../public/assets/closeIcon.png'
import menu from '../../public/assets/menu.png'
import Link from 'next/link';

const NavBar = () =>{
  const [navbar, setNavbar] = useState(false)
    const menuItems = [
        {
            slug: 'home',
            name: 'Home'
        },
        {
            slug: 'contactame',
            name: 'Contáctame'
        }
    ]
    return (
        <div className='bg-mafeGray flex justify-between px-8 max-h-3xl min-w-full max-w-full'>
          <Image className='w-48 h-28' width={400} height={250} src={logo} alt='...'/>
          <div className="lg:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none"
              onClick={() => setNavbar(!navbar)}
            >
                {navbar ? (
                    <Image src={closeIcon} width={18} height={18} alt="logo" />
                    ): (
                    <Image
                        src={menu}
                        width={20}
                        height={20}
                        alt="logo"
                        className="focus:border-none active:border-none" 
                    />
                    )
                }
            </button>
          </div>
          <div className='flex self-center'>
            <div
              className={` relative h-mobileMenu md:h-3/6 lg:bg-gris flex-1 justify-self-center pb-20 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? 'p-12 lg:p-0 block' : 'hidden'
              }`}
            >
                <ul className=" lg:h-auto items-center justify-center lg:flex">
                    {menuItems.map(item => (
                        <li key={item.slug} className=" font-bal text-3xl text-mafeGreen py-6 lg:px-6 text-center border-b-2 lg:border-b-0 hover:border-b-cblue  hover:text-white lg:hover:text-mafePink">
                            <Link href={`/${item.slug}`} onClick={() => setNavbar(!navbar)}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
    )
}
export default NavBar