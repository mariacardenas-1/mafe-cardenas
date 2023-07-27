"use client";

import style from './hero.module.css'
import Image from 'next/image'
import profile from '../../../public/assets/profile.jpg'
import Link from 'next/link'
import mail from '../../public/assets/correo-electronico.png'
import linkedin from '../../../public/assets/linkedinLight.png'
import github from '../../../public/assets/githubLight.png'
import flecha from '../../../public/assets/flecha-hacia-abajo.png'
import GooeyButton from '../gooeyButton/GooeyButton'
import ThemeButton from '@/components/themeButton/ThemeButton'
 
export default function Home() {
  return (
    <div className={style.hero}>
      <Image className={style.profile} src={profile} alt='profile' />
      <div className={style.text}>
        <div className={style.name}>Mafe Cárdenas</div>
        <p className={style.description}>Frontend Developer</p>
        <div className={style.iconBox}>
          <Link target='_blank' href={'https://www.linkedin.com/in/mafe-dev/'}>
            <Image className={style.icon} src={linkedin} alt='LinkedIn' />
          </Link>
          <Link target='_blank' href={'https://github.com/mariacardenas-1'}>
            <Image className={style.icon} src={github} alt='GitHub' />
          </Link>
        </div>
        <GooeyButton />
        <p className={style.scrollDown}>Desplazar hacia abajo</p>
        <Link href={'/'}>
          <Image className={style.flecha} src={flecha} alt='scroll down' />
        </Link>
      </div>
    </div>
  )
}
