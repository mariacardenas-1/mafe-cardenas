import Image from "next/image"
import style from './themeButton.module.css'
import { useState } from "react"
import sun from '../../../public/assets/sun.png'
import moon from '../../../public/assets/moon.png'

export default function ThemeButton() {
    const [dark, setDark] = useState(false) 
    return (
        <div className={style.container} onClick={()=>setDark(!dark)}>
            { dark ? (
                <Image className={style.icon} src={sun} alt="light" />
            ):(
                <Image className={style.icon} src={moon} alt="dark" />
            )}
        </div>
    )
}