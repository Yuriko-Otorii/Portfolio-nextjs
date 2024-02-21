'use client'

import { useState, useEffect, useRef } from 'react'

import { Link as Scroll } from 'react-scroll'

type Props = {
  mode: boolean
  color: string
  position: boolean
}

const Balloon = ({ mode, color, position }: Props) => {
  const [leftRotationDegrees, setLeftRotateDegrees] = useState<number>(0)
  const [rightRotationDegrees, setRighttRotateDegrees] = useState<number>(0)
  const [topPageLeftRotationDegrees, settopPageLeftRotateDegrees] = useState<number>(0)
  const [topPageRightRotationDegrees, settopPageRighttRotateDegrees] = useState<number>(0)
  const leftEye = useRef<HTMLDivElement>(null)
  const rightEye = useRef<HTMLDivElement>(null)
  const hoveredLeftEye = useRef<HTMLDivElement>(null)
  const hoveredRightEye = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [leftRotationDegrees, rightRotationDegrees])

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const toggleVisibility = () => {
    window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false)
  }

  const handleMouseMove = (event: Event) => {
    const eyeX =
      leftEye.current!.getBoundingClientRect().left +
      leftEye.current!.clientWidth / 2
    const eyeY =
      leftEye.current!.getBoundingClientRect().top +
      leftEye.current!.clientHeight / 2

    const e = event as MouseEvent
    const mouseX = e.clientX
    const mouseY = e.clientY
    let radian = Math.atan2(mouseX - eyeX, mouseY - eyeY)
    setLeftRotateDegrees(radian * (180 / Math.PI) * -1 + 120)
    setRighttRotateDegrees(radian * (180 / Math.PI) * -1 + 270)
    settopPageLeftRotateDegrees(radian * (180 / Math.PI) * -1 + 270)
    settopPageRighttRotateDegrees(radian * (180 / Math.PI) * -1 + 85)
  }

  return (
    <>
    {position ? (
      <div className="relative">
        <div
          className={`flex justify-center items-center cursor-pointer w-[120px] h-[120px] rounded-full opacity-80 bg-${color}`}
          // className={`flex justify-center items-center cursor-pointer w-[120px] h-[120px] rounded-full opacity-80 bg-[#7DD3FC]`}
        >
          {/* <div className={`flex justify-center items-center cursor-pointer w-[120px] h-[120px] rounded-full opacity-80 ${color} animate-jump`}> */}
          <div className="flex gap-[.1rem] absolute top-[1.4rem] left-[1.7rem]">
            <div
              ref={leftEye}
              className="flex w-[2rem] h-[2rem] bg-[#fff] rounded-full"
              style={{ transform: `rotate(${leftRotationDegrees}deg)` }}
            >
              <div
                className={`absolute rounded-full w-[1.2rem] h-[1.2rem] top-[.3rem] right-[.2rem] bg-gray-900`}
              ></div>
              <div className={`absolute top-[.7rem] right-[.2rem]`}></div>
            </div>
            <div
              ref={hoveredLeftEye}
              className="flex w-[3rem] h-[3rem] bg-[#fff] rounded-full"
              style={{ display: 'none' }}
            >
              <div className={`absolute top-[.4rem] right-[.4rem]`}></div>
            </div>
            <div
              ref={rightEye}
              className="flex w-[2rem] h-[2rem] bg-[#fff] rounded-full"
              style={{ transform: `rotate(${rightRotationDegrees}deg)` }}
            >
              <div
                className={`absolute rounded-full w-[1.2rem] h-[1.2rem] top-[.3rem] left-[.2rem] bg-gray-900`}
              ></div>
              <div className={`absolute top-[.7rem] left-[.2rem]`}></div>
            </div>
            <div
              ref={hoveredRightEye}
              className="flex w-[3rem] h-[3rem] bg-[#fff] rounded-full"
              style={{ display: 'none' }}
            >
              <div className={`absolute top-[.4rem] left-[.4rem]`}></div>
            </div>
          </div>
          <div className="absolute top-[60px] left-[47px] m-[auto] w-[22px] h-[10px] border-solid border-[2px] border-slate-800 rounded-tl-[0px] rounded-tr-[0px] rounded-br-[800px] rounded-bl-[800px] border-t-[0px]"></div>
        </div>
      </div>
    ) : (
      <Scroll smooth to='top' className={`fixed right-5 flex flex-col items-center gap-2 transition-all ${isVisible ? "bottom-5": "-bottom-28"}`}>
        <p>Page top</p>
        <div className="relative">
          <div
            className={`flex justify-center items-center cursor-pointer w-[60px] h-[60px] rounded-full opacity-80 hover:opacity-100 ${mode? "bg-[#fef08a]": "bg-[#7DD3FC]"}`}
          >
            <div className="flex gap-[.1rem] absolute top-[.9rem] left-[.4rem]">
              <div
                ref={leftEye}
                className="flex w-[1.5rem] h-[1.5rem] bg-[#fff] rounded-full"
                style={{ transform: `rotate(${topPageLeftRotationDegrees}deg)` }}
              >
                <div
                  className={`absolute rounded-full w-[1rem] h-[1rem] top-[.3rem] right-[.5rem] bg-gray-900`}
                ></div>
              </div>
              <div
                ref={hoveredLeftEye}
                className="flex w-[3rem] h-[3rem] bg-[#fff] rounded-full"
                style={{ display: 'none' }}
              >
              </div>
              <div
                ref={rightEye}
                className="flex w-[1.5rem] h-[1.5rem] bg-[#fff] rounded-full"
                style={{ transform: `rotate(${topPageRightRotationDegrees}deg)` }}
              >
                <div
                  className={`absolute rounded-full w-[1rem] h-[1rem] top-[.3rem] left-[.5rem] bg-gray-900`}
                ></div>
              </div>
              <div
                ref={hoveredRightEye}
                className="flex w-[3rem] h-[3rem] bg-[#fff] rounded-full"
                style={{ display: 'none' }}
              >
                <div className={`absolute top-[.4rem] left-[.4rem]`}></div>
              </div>
            </div>
            {/* <div className="absolute top-[45px] left-[27px] m-[auto] w-[17px] h-[8px] border-solid border-[2px] border-slate-800 rounded-tl-[0px] rounded-tr-[0px] rounded-br-[800px] rounded-bl-[800px] border-t-[0px]"></div> */}
          </div>
        </div>
      </Scroll>
    )}
    </>
  )
}

export default Balloon
