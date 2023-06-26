import Image from 'next/image'
import profile from '../../public/assets/profile.png'
import Layout from './layout'
import NavBar from '@/components/navBar'
import mail from '../../public/assets/correo-electronico.png'
import linkedin from '../../public/assets/linkedin.png'
import github from '../../public/assets/github.png'
 
export default function Home() {
  return (
    <div className='bg-mafePink'>
      <div className='items-center flex flex-col max-w-full lg:flex-row w-full'>
        <section className='lg:w-1/3 w-3/5 mx-20 my-10 md:m-20 flex items-center'>
          <Image src={profile} alt='...' className='rounded-full w-96 border-2 border-mafePurple'/>
        </section>
        <section className='w-full lg:w-2/3 content-center flex flex-col justify-center flex-wrap ' >
          <div className='text-4xl md:text-6xl text-mafeGray text-bold font-concert'>
            HOLA SOY MAFE!</div>
          <div className='font-dosis w-5/6 lg:w-2/3 my-10 text-justify text-lg'>
            <p className='font-medium text-mafeGray'>Soy una Frontend Junior entusiasta y apasionada por dar vida a diseños creativos y convertirlos en sitios web interactivos y atractivos. Tengo experiencia en HTML, CSS, JavaScript y frameworks como React.js y Next.js. Además, estoy familiarizada con la metodologia SCRUM. Tengo una fuerte atención al detalle, por lo que me enfoco en crear interfaces intuitivas y responsivas para ofrecer una excelente experiencia a los usuarios. Estoy emocionada de seguir aprendiendo y creciendo como Frontend, enfrentando nuevos desafíos y contribuyendo al éxito de cada proyecto en el que participe. ¡Contáctame para que podamos hacer cosas increíbles juntos!</p>
          </div>
        </section>
      </div>  
      <div className="flex m-10 text-black text-lg">
        <div className='w-6/12 flex flex-col content-center flex-wrap'>
          <p className="text-3xl text-mafeGray font-concert">Siempre estoy dispuesta a convensar!</p>
          <p className=" flex hover:cursor-pointer">
            <button className='py-2.5 px-5 mt-3.5 font-semibold bg-mafeGray hover:bg-black text-mafeGreen flex rounded-2xl'>
              <Image src={mail} alt='...' width={30} />
              &nbsp; Enviame un email
            </button>
          </p>
        </div>
        <div className='mt-msetenta w-6/12 flex gap-5 content-center flex-wrap justify-center'>
          <Image className='w-16 h-16 hover:cursor-pointer hover:bg-mafeGreen hover:rounded-full' src={linkedin} alt='...' />
          <Image className='w-16 h-16 hover:cursor-pointer hover:bg-mafeGreen hover:rounded-full' src={github} alt='...' />
        </div>
      </div>
    </div>
    
  )
}
