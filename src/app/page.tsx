'use client';

import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Awards from '@/components/Awards'
import Languages from '@/components/Languages'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/space.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundColor: '#000000'
        }}
      />
      <div className="relative z-10 min-h-screen bg-black/80">
        <Header />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Awards />
        <Languages />
        <Contact />
      </div>
    </div>
  )
}