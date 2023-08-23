// components/CodersrankSummary.js
import { useEffect } from 'react';
import style from './codersrankWorkExperince.module.css'

type CodersrankWorkExperienceProps = {
    username: string;
    branding: boolean;
    // Agrega el tipo aquí
  };

const CodersrankWorkExperience = ({ username, branding }:CodersrankWorkExperienceProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@codersrank/work-experience@0.9.8/codersrank-work-experience.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className={style.experiencia}><codersrank-work-experience username={username} branding={branding}></codersrank-work-experience></div>;
};

export default CodersrankWorkExperience;