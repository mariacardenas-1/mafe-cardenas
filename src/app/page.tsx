import Image from 'next/image'
import profile from '../../public/assets/profile1.png'
import Link from 'next/link'
import mail from '../../public/assets/correo-electronico.png'
import linkedin from '../../public/assets/linkedin.png'
import github from '../../public/assets/github.png'
 
export default function Home() {
  return (
    <div className='bg-mafePink pt-14 lg:pl-7'>
      <div className='items-center flex flex-col max-w-full lg:flex-row w-full'>
        <section className='justify-center lg:w-1/3 w-3/5  flex items-center'>
          <Image src={profile} alt='...' className='rounded-full w-96 border-2 border-mafePurple'/>
        </section>
        <section className='w-full lg:w-2/3 content-center flex flex-col justify-center flex-wrap ' >
          <div className='text-4xl md:text-center md:text-6xl text-mafeGray text-bold font-concert'>
            HOLA SOY MAFE!</div>
          <div className='font-dosis w-5/6 lg:w-2/3 my-10 text-justify text-lg'>
            <p className='font-medium text-mafeGray'>Soy una Frontend Junior entusiasta y apasionada por dar vida a diseños creativos y convertirlos en sitios web interactivos y atractivos. Tengo experiencia en HTML, CSS, JavaScript y frameworks como React.js y Next.js. Además, estoy familiarizada con la metodologia SCRUM. Tengo una fuerte atención al detalle, por lo que me enfoco en crear interfaces intuitivas y responsivas para ofrecer una excelente experiencia a los usuarios. Estoy emocionada de seguir aprendiendo y creciendo como Frontend, enfrentando nuevos desafíos y contribuyendo al éxito de cada proyecto en el que participe. ¡Contáctame para que podamos hacer cosas increíbles juntos!</p>
          </div>
        </section>
      </div>  
      <div className="flex flex-col md:flex-row mx-10 md:m-10 lg:mt-7 text-black text-lg">
        <div className='w-full md:w-6/12 flex flex-col content-center flex-wrap'>
          <p className="text-3 md:text-3xl text-mafeGray font-concert">Siempre estoy dispuesta a convensar!</p>
          <p className=" flex hover:cursor-pointer">
            <Link target='_blank' href='mailto:maria.cardenas.r3@gmail.com'>
              <button className='py-2.5 px-5 mt-3.5 justify-center w-full font-semibold bg-mafeGray hover:bg-black text-mafeGreen flex rounded-2xl'>
                <Image src={mail} alt='...' width={30} />
                &nbsp; Enviame un email
              </button>
            </Link>
          </p>
        </div>
        <div className='my-10 md:content-end md:mt-msetenta w-full md:w-6/12 flex gap-5 content-center flex-wrap justify-center'>
          <Link target='_blank' href='https://www.linkedin.com/in/mafe-dev/'>
            <Image className='w-16 h-16 hover:cursor-pointer hover:bg-mafeGreen hover:rounded-full' src={linkedin} alt='...' />
          </Link>
          <Link target='_blank' href='https://github.com/mariacardenas-1'>
            <Image className='w-16 h-16 hover:cursor-pointer hover:bg-mafeGreen hover:rounded-full' src={github} alt='...' />
          </Link>
        </div>
      </div>
    </div>
  )
}
