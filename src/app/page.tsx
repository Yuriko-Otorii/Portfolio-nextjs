'use client'

import { useState } from 'react'

import Header from './sections/Header'
import Projects from './sections/Projects'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Balloon from './components/Balloon'

export default function Home() {
  const [mode, setMode] = useState(false)

  return (
    <main className="text-white flex flex-col items-center justify-between">
      <div
        className={
          mode
            ? 'bg-darkModeImg bg-cover blur-none -z-50 h-full w-screen fixed'
            : 'bg-lightModeImg bg-cover blur-sm -z-50 h-full w-screen fixed'
        }
      ></div>
        <Header mode={mode} setMode={setMode} />
        <Projects mode={mode} />
        <About mode={mode} />
        <Contact mode={mode} />
        <Balloon mode={mode} color={''} position={false} />
        <Footer />
    </main>
  )
}
