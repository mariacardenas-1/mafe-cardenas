"use client";
import { useState } from 'react'
import style from './navBar.module.css'
import Image from 'next/image'
import logoLight from '../../../public/assets/logoLight.png'
import closeIcon from '../../../public/assets/closeIcon.png'
import menu from '../../../public/assets/menu.png'
import Link from 'next/link';

const NavBar = () =>{
  const [navbar, setNavbar] = useState(false)
    const menuItems = [
        {
            slug: '',
            name: 'Inicio'
        },
        {
            slug: '',
            name: 'Conóceme'
        },
        {
            slug: '',
            name: 'Experiencia'
        },
        {
            slug: '',
            name: 'Proyectos'
        },
        {
            slug: '',
            name: 'Contáctame'
        }
    ]
    return (
        <div className={style.nav}>
            <div className={style.navbar}>
                <div className={style.prueba}>
                    <Link href='/' >
                        <Image className={style.logo} src={logoLight} alt='logo' />
                    </Link>
                    <div className={style.divButton}>
                        <button
                            className={style.button}
                            onClick={() => setNavbar(!navbar)}
                        > 
                            {navbar ? (
                                    <Image src={closeIcon} width={20} height={20} alt="logo" />
                                ): (
                                    <Image
                                        src={menu}
                                        width={20}
                                        height={20}
                                        alt="logo"
                                        className={style.hamburguer}
                                    />
                                )
                            }
                        </button>
                    </div>
                </div>

                <div className={style.menu}>
                    <div className= { navbar ? `${style.wraperActive}` : `${style.wraperUnactive}`} >
                        <ul className={style.ulItems}>
                            {menuItems.map(item => (
                                <li key={item.slug} className={style.items}>
                                    <Link  className={style.linkItems} href={`/${item.slug}`} onClick={() => setNavbar(!navbar)}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar
        