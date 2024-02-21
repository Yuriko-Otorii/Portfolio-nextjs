'use client'

import { Carousel, IconButton } from '@material-tailwind/react'
import Image from 'next/image'

type Props = {
  video: string
  pics: string[]
}

const MediaCarousel = ({ video, pics }: Props) => {
  return (
    <Carousel
      className="rounded-xl h-auto w-full max-w-[650px]"
      loop={true}
      placeholder=""
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-[1rem] md:bottom-[2.5rem] left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-gray-600" : "w-4 bg-gray-600/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          placeholder=""
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 right-2 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w- [48px] h-12 max-h- [48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </IconButton>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          placeholder=""
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-2 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w- [48px] h-12 max-h- [48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </IconButton>
      )}
    >
      <video
        src={video}
        className="h-auto w-fill"
        controls
        muted
        autoPlay
        playsInline
      />
      {pics.length > 0 &&
        pics.map((pic, index) => (
          <Image
            key={index}
            src={pic}
            alt="..."
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        ))}
    </Carousel>
  )
}

export default MediaCarousel
