import Image from "next/image"
import React from "react"

interface FeatureProps {
  title: string
  description: string
  image: string
  alt: string
}

const Feature = ({ title, description, image, alt }: FeatureProps) => {
  return (
    <div className="container relative mx-auto flex flex-col-reverse bg-repeat heropattern-topography-gray-700 lg:grid lg:grid-cols-2">
      <div className="absolute -bottom-44 -left-4 h-72 w-72 animate-blob rounded-full bg-sky-500/30 mix-blend-overlay blur-2xl filter" />
      <div className="animation-delay-2000 absolute top-0 -right-4 h-96 w-96 animate-blob rounded-full bg-yellow-200/20 mix-blend-overlay blur-2xl filter" />
      <div className="animation-delay-4000 absolute top-44 left-44 h-72 w-72 animate-blob rounded-full bg-indigo-300/30 mix-blend-overlay blur-2xl filter" />

      <div className="flex flex-1 flex-col justify-center">
        <h3 className="mb-4 text-center text-3xl font-semibold underline decoration-indigo-500/80 lg:text-left xl:text-4xl">
          {title}
        </h3>
        <p className="text-center text-gray-300 lg:text-left">{description}</p>
      </div>

      <div className="relative my-10 mx-auto h-[10rem] w-full transition-transform duration-300 hover:-translate-y-3 lg:h-[18rem] lg:w-[18rem]">
        <Image src={image} alt={alt} layout="fill" objectFit="contain" />
      </div>
    </div>
  )
}

export default Feature
