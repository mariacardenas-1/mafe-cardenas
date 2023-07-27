import style from './knowMe.module.css'
import Image from 'next/image'
import perfil from '../../../public/assets/perfil.png'

export default function Knowme (){
    return(
        <div className={style.knowMe}>
            <h1 className={style.title}>Sobre mi</h1>
            <div className={style.content}>
                <Image className={style.profile}src={perfil} alt='profile' />
                <div className={style.description}>
                    Frontend Junior entusiasta y apasionada por dar vida a diseños creativos y convertirlos en sitios web interactivos y atractivos. Tengo experiencia en HTML, CSS, JavaScript y frameworks como React.js y Next.js. Además, estoy familiarizada con la metodologia SCRUM. Tengo una fuerte atención al detalle, por lo que me enfoco en crear interfaces intuitivas y responsivas para ofrecer una excelente experiencia a los usuarios. Estoy emocionada de seguir aprendiendo y creciendo como Frontend, enfrentando nuevos desafíos y contribuyendo al éxito de cada proyecto en el que participe. ¡Contáctame para que podamos hacer cosas increíbles juntos!
                </div>
            </div>
        </div>
    )
}