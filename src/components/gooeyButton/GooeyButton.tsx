import style from './gooeyButton.module.css'
import Link from 'next/link'

export default function GooeyButton() {
    return (
        <>
            <div className={style.wrapper}>
                <Link className={style.button} href="mailto:maria.cardenas.r3@gmail.com">Contrátame!</Link>
            </div>
            <svg style={{visibility: 'hidden', position: 'absolute', width: "0", height: "0", xmlns: "http://www.w3.org/2000/svg"}} version="1.1">
                <defs>
                    <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                    </filter>
                </defs>
            </svg>
        </>
    )
}