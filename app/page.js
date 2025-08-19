import { AboutSection } from '@/components/AboutSection'
import { EmailSecrion } from '@/components/EmailSecrion'
import Footer from '@/components/Footer'
import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import ProjectSection from '@/components/ProjectSection'
import Image from 'next/image'

export default function Home() {
  return (
  <div className=' flex min-h-screen flex-col bg-[#121212]  mx-auto px-12 py-4 '>
  <Navbar/>
  <div className='content mt-24 mx-auto px-12 py-4'>
   <Herosection/>
   <AboutSection/>
   <ProjectSection/>
   <EmailSecrion/>
   
   </div>
   <Footer/>
  </div>
  )
}
