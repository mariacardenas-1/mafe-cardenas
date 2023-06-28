import Image from 'next/image'
import corazon from '../../public/assets/corazon.png'

const Footer = () => {
    return(
        <div className="flex font-bal gap-5 justify-center py-2.5 items-center mt-4 text-mafeGreen text-lg">
           HECHO CON
           <Image className='w-10' src={corazon} alt='amor'/>
        </div>
    )
}

export default Footer