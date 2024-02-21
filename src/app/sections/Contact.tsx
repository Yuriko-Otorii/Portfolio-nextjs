'use client'

import { FormEvent, useState } from 'react'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { init, send } from 'emailjs-com'

type Props = {
  mode: boolean
}

const Contact = ({ mode }: Props) => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    sendMessage()
  }

  const accountKey = process.env.NEXT_PUBLIC_MAILJS_ACOUNT_KEY
  const serviceKey = process.env.NEXT_PUBLIC_MAILJS_SERVICE_KEY
  const templateKey = process.env.NEXT_PUBLIC_MAILJS_TEMPLATE_KEY

  const sendMessage = () => {
    if (
      accountKey !== undefined &&
      serviceKey !== undefined &&
      templateKey !== undefined
    ) {
      init(accountKey)

      const param = {
        name,
        email,
        subject,
        message,
      }

      send(serviceKey, templateKey, param).then(() => {
        window.alert('Your message is successfully sent!')

        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      })
    }
  }

  const disableCondition =
    name === '' || email === '' || subject === '' || message === ''

  return (
    <section
      className="flex flex-col justify-center items-center w-full mt-20 w-full"
      id="contact"
    >
      <h1 className="text-[2rem] mb-4 md:text-[2.4rem]">Contact</h1>
      <div className="flex flex-col items-center justify-center w-full gap-10 w-full">
        <motion.div
          className="w-full flex justify-center"
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
            className={
              mode
                ? 'flex flex-col items-center w-[95%] h-fit bg-gray-500 bg-opacity-50 rounded-lg p-5'
                : 'flex flex-col items-center w-[95%] h-fit bg-white bg-opacity-20 rounded-lg p-5'
            }
          >
            <p className="text-[1.15rem] md:text-[1.5rem] w-full md:w-[60%] max-w-[680px] font-light text-center mb-10">
              Please feel free to say, &quot;hi&quot;!
            </p>
            <form
              onSubmit={handleSubmit}
              className="w-[80%] md:w-[50%] max-w-[680px] py-5 flex flex-col items-center justify-center gap-8"
            >
              <div className="relative w-full">
                <input
                  autoComplete="off"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:borer-rose-600"
                  placeholder="Name"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm"
                >
                  Name
                </label>
              </div>
              <div className="relative w-full">
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:borer-rose-600"
                  placeholder="Email address"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>
              <div className="relative w-full">
                <input
                  autoComplete="off"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:borer-rose-600"
                  placeholder="subject"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm"
                >
                  Subject
                </label>
              </div>
              <div className="relative w-full">
                <textarea
                  autoComplete="off"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="peer placeholder-transparent w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:borer-rose-600 focus:h-32"
                  placeholder="message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-5 transition-all peer-focus:-top-5 peer-focus:text-sm"
                >
                  Message
                </label>
              </div>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <button
                    type="submit"
                    disabled={disableCondition}
                    className='relative inline-block py-1 px-3 text-[1.3rem] transhition-all before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:z-10 before:transition-all before:border before:rounded-lg after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:border after:rounded-lg after:opacity-0 after:h-full after:transition-all hover:before:animate-forwardsBtnAnimation hover:before:w-[50px] hover:before:h-[50px] hover:before:-bottom-2 hover:before:left-6 hover:before:rounded-none hover:before:opacity-60 hover:after:animate-backwardsBtnAnimation hover:after:border hover:after:rounded-none hover:after:w-[50px] hover:after:h-[50px] hover:after:-bottom-2 hover:after:left-6 hover:after:opacity-60 diabled:opacity-50 disabled:hover:before:animate-none disabled:hover:after:animate-none disabled:hover:before:w-full disabled:hover:before:h-full disabled:hover:before:bottom-0 disabled:hover:before:left-0 disabled:hover:before:rounded-lg disabled:hover:after:w-full disabled:hover:after:h-full disabled:hover:after:bottom-0 disabled:hover:after:left-0 disabled:hover:after:rounded-lg'
                  >
                    Submit
                  </button>
                </div>
                <p>Or</p>
                <a
                  href="https://www.linkedin.com/in/yuriko-127381256/"
                  className="hover:text-[#0077B5] transhition-all"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-[1.8rem] md:text-[2.3rem]"
                  />
                </a>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
