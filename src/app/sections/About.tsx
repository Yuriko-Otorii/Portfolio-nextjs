import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'

type Props = {
  mode: boolean
}

const About = ({ mode }: Props) => {
  return (
    <section
      className="flex flex-col justify-center items-center mt-20 w-full"
      id="about"
    >
      <h1 className="text-[2rem] mb-4 md:text-[2.4rem]">About me</h1>
      <div className="flex flex-col items-center justify-center gap-10 w-full">
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
            <div className="flex flex-col items-center w-full gap-10">
              <div className="flex flex-col items-center w-full gap-5">
                <p className="text-[1.15rem] md:text-[1.5rem] w-full md:w-[60%] max-w-[680px] font-light mx-auto mt-16">
                  I am a full-stack developer with a 3 years experience. I
                  passionate about creating user-friendly and visually appealing
                  applications that are accessible to everyone.
                </p>
              </div>
              <div className="flex flex-col items-center w-full md:w-[90%]">
                <h2 className="text-center text-[1.6rem] md:text-[1.7rem] md:text-[2rem] my-20">
                  I can help your team with:
                </h2>
                <div className="flex flex-col items-center gap-20 lg:gap-28 mb-16">
                  <div className="flex flex-col lg:flex-row items-start gap-20">
                    <div className="flex flex-col justify-center items-center gap-5">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10">
                        <FontAwesomeIcon
                          icon={faLaptopCode}
                          className="text-[3rem]"
                        />
                        <div className="flex flex-col items-center md:items-start gap-5 md:w-1/2 grow">
                          <div className="text-[1.6rem] md:text-[1.7rem]">
                            Strong coding skills
                          </div>
                          <div className="text-[1.15rem] md:text-[1.5rem]">
                            I’m highly skilled in coding, with proficiency in a
                            variety of languages and frameworks. My ability to
                            write readable code that adheres to best practices
                            makes me a reliable developer.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10">
                        <FontAwesomeIcon
                          icon={faPenNib}
                          className="text-[3rem]"
                        />
                        <div className="flex flex-col items-center md:items-start gap-5 md:w-1/2 grow">
                          <div className="text-[1.6rem] md:text-[1.7rem]">
                            UX focused design skills
                          </div>
                          <div className="text-[1.15rem] md:text-[1.5rem]">
                            I place a high priority on user experience in my
                            designs With input from clients. I have the ability
                            to create interfaces that are not only functional
                            but also visually pleasing and user-friendly.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row items-start gap-20">
                    <div className="flex flex-col justify-center items-center gap-5">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10">
                        <FontAwesomeIcon
                          icon={faPeopleGroup}
                          className="text-[3rem]"
                        />
                        <div className="flex flex-col items-center md:items-start gap-5 md:w-1/2 grow">
                          <div className="text-[1.6rem] md:text-[1.7rem]">
                            Nicely work with a team
                          </div>
                          <div className="text-[1.15rem] md:text-[1.5rem]">
                            I value open collaboration, and I respect the unique
                            skills and perspectives of all team members. I’m
                            always ready to assist others and contribute
                            valuable ideas, which helps to foster a productive
                            and harmonious team environment.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10">
                        <FontAwesomeIcon
                          icon={faHandshake}
                          className="text-[3rem]"
                        />
                        <div className="flex flex-col items-center md:items-start gap-5 md:w-1/2 grow">
                          <div className="text-[1.6rem] md:text-[1.7rem]">
                            Excellent work ethic
                          </div>
                          <div className="text-[1.15rem] md:text-[1.5rem]">
                            I’m deeply committed to delivering quality work on
                            schedule. I uphold a high level of responsibility in
                            all my tasks. I’m always eager to learn new things
                            and improve my skills, and I consistently go the
                            extra mile to exceed expectations.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
