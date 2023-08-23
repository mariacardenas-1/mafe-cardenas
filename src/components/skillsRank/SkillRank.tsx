import CodersRankSkillsChart from '@codersrank/skills-chart';
import style from './skillRank.module.css'


// register web component as <codersrank-skills-chart> element
window.customElements.define('codersrank-skills-chart', CodersRankSkillsChart);

export default function SkillRank (){
    return(
        <div className={style.container}>
            <codersrank-skills-chart username="mariacardenas-1" legend={true} branding={false}></codersrank-skills-chart>
            
        </div>
    )
}