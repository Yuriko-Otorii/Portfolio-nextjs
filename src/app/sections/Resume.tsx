import Link from 'next/link'

const Resume = () => {
  return (
    <>
      <Link
        href="/resume-pdf.pdf"
        locale={false}
        target="_blank"
        rel="noreferrer"
      >
        <button className='relative inline-block py-1 px-3 text-[1.3rem] transhition-all before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:z-10 before:transition-all before:border before:rounded-lg after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:border after:rounded-lg after:opacity-0 after:h-full after:transition-all hover:before:animate-forwardsBtnAnimation hover:before:w-[50px] hover:before:h-[50px] hover:before:-bottom-2 hover:before:left-24 hover:before:rounded-none hover:before:opacity-60 hover:after:animate-backwardsBtnAnimation hover:after:border hover:after:rounded-none hover:after:w-[50px] hover:after:h-[50px] hover:after:-bottom-2 hover:after:left-24 hover:after:opacity-60'>
          Check out my resume
        </button>
      </Link>
    </>
  )
}

export default Resume
