import Image from "next/image"
import React from "react"

interface FeatureProps {
  title: string
  description: string
  image: string
  alt: string
}

const FeatureReverse = ({ title, description, image, alt }: FeatureProps) => {
  return (
    <div
      className={`container relative mx-auto flex flex-col lg:grid lg:grid-cols-2`}
    >
      <div
        className={`relative my-10 h-[10rem] w-full transition-transform duration-300 hover:-translate-y-3 lg:h-[18rem] lg:w-[18rem]`}
      >
        <Image src={image} alt={alt} layout="fill" objectFit="contain" />
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <h3 className="mb-4 text-center text-3xl font-semibold underline decoration-indigo-500/80 lg:text-left xl:text-4xl">
          {title}
        </h3>
        <p className="text-center text-gray-300 lg:text-left">{description}</p>
      </div>
    </div>
  )
}

export default FeatureReverse
