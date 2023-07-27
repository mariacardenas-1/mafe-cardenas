"use client";

import style from './page.module.css'
import Hero from '../components/hero/Hero'
import KnowMe from '../components/knowMe/KnowMe';
 
export default function Home() {
  return (
    <div>
      <div className={style.hero}>
        <Hero />
      </div>
      <div className={style.knowMe}>
        <KnowMe />
      </div>
    </div>
  )
}
