'use client'

import { useState } from 'react'

import { Link as Scroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import Balloon from '../components/Balloon'

type Props = {
  mode: boolean
  setMode: (mode: boolean) => void
}

const Header = ({mode, setMode}: Props) => {

  return (
    <div className="h-screen w-screen" id="top">
      <div className="flex justify-end mr-5 md:mr-10 mt-3">
        <div className="flex flex-col itens-center gap-1" onClick={() => setMode(!mode)}>
          <button>
            Mode
          </button>
          {mode ? (
            <FontAwesomeIcon
              icon={faMoon}
              className="text-[1.5rem] md:text-[2rem]"
            />
          ) : (
            <FontAwesomeIcon
              icon={faSun}
              className="text-[1.5rem] md:text-[2rem]"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col items-center mt-4 md:mt-0">
        <h1 className="text-[3rem] md:text-[6rem]">Yuriko Otorii</h1>
        <h2 className="text-[1.7rem] md:text-[3rem] mt-3">
          Full-stack developer
        </h2>
      </div>
      <div className="flex justify-center gap-[10rem] mt-24">
        <div className="flex flex-col items-center">
          <Scroll
            smooth
            to="projects"
            className="cursor-pointer mb-6 text-[2rem] md:text-[2.4rem] hover:text-gray-400"
          >
            Projects
          </Scroll>
          <Scroll
            smooth
            to="about"
            className="cursor-pointer mb-6 text-[2rem] md:text-[2.4rem] hover:text-gray-400"
          >
            About me
          </Scroll>
          <Scroll
            smooth
            to="contact"
            className="cursor-pointer mb-6 text-[2rem] md:text-[2.4rem] hover:text-gray-400"
          >
            Contact
          </Scroll>
          {/* <Balloon color={'#7DD3FC'} position={false} /> */}
        </div>
        {/* <div className='flex flex-col'>
          <div className="mb-6 text-[2.5rem] hover:text-gray-400 font-bold">About me</div>
          <Balloon color={'bg-red-200'} />
        </div>
        <div className='flex flex-col'>
          <div className="mb-6 text-[2.5rem] hover:text-gray-400 font-bold">Contacts</div>
          <Balloon color={'bg-lime-200'} />
        </div> */}
      </div>
    </div>
  )
}

export default Header
