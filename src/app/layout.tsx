import './globals.css'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'

import { Dosis, Concert_One, Balsamiq_Sans } from 'next/font/google'
 
const dosis = Dosis({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dosis',
})

const concert_one = Concert_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-concert-one',
})

const balsamiq_sans = Balsamiq_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-balsamiq-sans',
})


export const metadata = {
  title: 'Mafe Dev',
  description: 'Mafe Dev',
}

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className={`${dosis.variable} ${concert_one.variable} ${balsamiq_sans.variable} flex shadow-layout flex-col mx-auto justify-between min-h-screen max-w-screen-xl `}>
      <header className=' w-full mn-h-30'>
        <NavBar />
      </header>
      <main className='flex-1 flex content-start max-w-view '>{children}</main>
      <footer className='bg-mafeGray'>
       <Footer />
      </footer>
    </div>
      // <div className='shadow-layout flex bg-green-300 max-w-screen-2xl mx-auto my-0 min-h-screen justify-between'>
      // </div>    
  )
}

export default Layout