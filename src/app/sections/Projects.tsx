'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'

import { projects, Project } from '../data/projects'
import Carousel from '../components/Caroucsel'
import tsIcon from '../../../public/typescript-icon.png'
import tailwindIcon from '../../../public/tailwindcss-icon.svg'
import mongoIcon from '../../../public/mongodb-icon.svg'
import postgresIcon from '../../../public/postgres-icon.png'
import nextjsIcon from '../../../public/next-js.icon.png'

type Props = {
  mode: boolean
}

const Projects = ({ mode }: Props) => {
  const sectionWrapper = useRef<HTMLDivElement>(null)

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center mt-52 w-full"
    >
      <h1 className="text-[2rem] mb-4 md:text-[2.4rem]">Projects</h1>
      <div className="flex flex-col items-center justify-center gap-10 w-full">
        {projects.map((project: Project) => (
          <motion.div
            className='w-full flex justify-center'
            key={project.id}
            variants={{
              offscreen: {
                y: 100,
                opacity: 0,
              },
              onscreen: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0 }}
          >
            <div
              ref={sectionWrapper}
              className={
                mode
                  ? 'flex flex-col items-center w-[95%] h-fit bg-gray-500 bg-opacity-50 rounded-lg p-5'
                  : 'flex flex-col items-center w-[95%] h-fit bg-white bg-opacity-20 rounded-lg p-5'
              }
            >
              <h2 className="text-center text-[1.6rem] md:text-[1.7rem] md:text-[2rem] mb-5">
                {project.title}
              </h2>

              <Carousel video={project.video} pics={project.pics} />

              <p className="text-[1.15rem] md:text-[1.5rem] w-full md:w-[60%] max-w-[680px] font-light mx-auto my-10">
                {project.descriptionEn}
              </p>
              <p className="hidden">{project.descriptionJp}</p>

              <div className="flex items-center gap-5 mb-10">
                {project.icons.map(
                  (icon, i) =>
                    (icon === 'react' && (
                      <FontAwesomeIcon
                        key={i}
                        icon={faReact}
                        className="text-[1.8rem] md:text-[2.3rem]"
                      />
                    )) ||
                    (icon === 'js' && (
                      <FontAwesomeIcon
                        key={i}
                        icon={faJs}
                        className="text-[1.8rem] md:text-[2.3rem]"
                      />
                    )) ||
                    (icon === 'nodejs' && (
                      <FontAwesomeIcon
                        key={i}
                        icon={faNodeJs}
                        className="text-[1.8rem] md:text-[2.3rem]"
                      />
                    )) ||
                    (icon === 'ts' && (
                      <Image
                        key={i}
                        src={tsIcon}
                        alt="TypeScript icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-[2.3rem] md:w-[2.5rem]"
                      />
                    )) ||
                    (icon === 'tailwind' && (
                      <Image
                        key={i}
                        src={tailwindIcon}
                        alt="Tailwind icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-[2.3rem] md:w-[2.5rem]"
                      />
                    )) ||
                    (icon === 'mongodb' && (
                      <Image
                        key={i}
                        src={mongoIcon}
                        alt="MongoDB icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-[2.3rem] md:w-[2.5rem]"
                      />
                    )) ||
                    (icon === 'postgres' && (
                      <Image
                        key={i}
                        src={postgresIcon}
                        alt="Postgres icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-[2.3rem] md:w-[2.5rem]"
                      />
                    )) ||
                    (icon === 'nextjs' && (
                      <Image
                        key={i}
                        src={nextjsIcon}
                        alt="Nextjs icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-[2.3rem] md:w-[2.2rem] invert"
                      />
                    ))
                )}
              </div>

              <div className="flex items-center justify-center gap-3">
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-all hover:opacity-50"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-[2.3rem]"
                    />
                  </Link>
                )}
                <Link href={project.link} target="_blank" rel="noreferrer">
                  <button className='relative inline-block py-1 px-3 text-[1.3rem] transhition-all before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:z-10 before:transition-all before:border before:rounded-lg after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:border after:rounded-lg after:opacity-0 after:h-full after:transition-all hover:before:animate-forwardsBtnAnimation hover:before:w-[50px] hover:before:h-[50px] hover:before:-bottom-2 hover:before:left-20 hover:before:rounded-none hover:before:opacity-60 hover:after:animate-backwardsBtnAnimation hover:after:border hover:after:rounded-none hover:after:w-[50px] hover:after:h-[50px] hover:after:-bottom-2 hover:after:left-20 hover:after:opacity-60'>
                    Open in browser
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
