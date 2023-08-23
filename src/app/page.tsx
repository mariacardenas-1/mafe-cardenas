"use client";

import style from './page.module.css'
import Hero from '../components/hero/Hero'
import KnowMe from '../components/knowMe/KnowMe';
import SkillRank from '@/components/skillsRank/SkillRank';
import CodersrankWorkExperience from '@/components/workExperience/CodersrankWorkExperience';
 
export default function Home() {
  return (
    <div>
      <div className={style.hero}>
        <Hero />
      </div>
      <div className={style.knowMe}>
        <KnowMe />
      </div>
      <div className={style.skillRank}>
        <SkillRank />
      </div>
      <div className={style.experience}>
        <CodersrankWorkExperience username='mariacardenas-1' branding={false}/>
      </div>
    </div>
  )
}
