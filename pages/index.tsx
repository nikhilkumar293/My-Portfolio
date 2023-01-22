import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import About from '@/Components/About'
import WorkExperience from '@/Components/WorkExperience'
import Skills from '@/Components/Skills'
import Project from '@/Components/Project'
import Develop from '@/Components/Develop'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Nikhil's Portfolio</title>
  
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />

      </section>

      {/* about */}
      <section id="about" className="snap-center ">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center ">
        <WorkExperience />

      </section>

      {/* Skills */}
       <section id="skills" className="snap-start">
        <Skills />

       </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Project />
      </section >
      
      <section id="develop" className="snap-end">
        <Develop />
      </section>


    </div>
  )
}

