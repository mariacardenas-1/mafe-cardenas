import style from './footer.module.css'
import Image from 'next/image'
import corazon from '../../../public/assets/corazon.png'

const Footer = () => {
    return(
        <div className={style.footer}>
           HECHO CON
           <Image className={style.heart} src={corazon} alt='amor'/>
        </div>
    )
}

export default Footer