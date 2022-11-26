import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
// import { FaArrowRight, FaDiscord } from "react-icons/fa"
import {
  heading1,
  heading2,
  description,
  // btnText1,
  // btnText2,
  topCard,
  backCard,
  // openSeaUrl,
  // discordUrl,
} from "../constants/constants"

interface CardProps {
  name: string
  price: string
  btnText: string
  profile: string
  image: string
  skewX: string
  skewY: string
  // btnUrl: string
  alt: string
  profileAlt: string
}

// useEffect(() => {
//   const script = document.createElement("script")
//   script.src = "https://checkout.flutterwave.com/v3.js"
//   document.getElementsByTagName("head")[0].appendChild(script)
// }, [])

const payNow:any = (e: { preventDefault: () => void }) => {
  alert(
    "Hi there! You about to proceed payment of USD100 for this Art as an inquiry/service fee, Click Ok to continue"
  )
  e.preventDefault()
  
  return (window as any).FlutterwaveCheckout({
    public_key: "FLWPUBK-00f1a8bfd678ad383f650cd6cccd643b-X",
    // amount: total,
    amount: 100,
    currency: "USD",
    tx_ref: new Date().toISOString(),
    customer: {
      //  email: localStorage.getItem("email"),
      email: "inkplate@gmail.com",
    },
    customizations: {
      title: "INKPLATE TECHNOLOGIES",
    },
    callback: async function () {
      alert("Payment successful...We will reach out to you for further details")
    },
  })
}

const Card = ({
  name,
  price,
  btnText,
  profile,
  image,
  skewX,
  skewY,
  // btnUrl,
  alt,
  profileAlt,
}: CardProps) => (
  <div className={`relative ${skewX} ${skewY}`}>
    <div className="h-[15rem] w-[11rem] rounded-2xl bg-gray-900 shadow-xl xl:h-[23rem] xl:w-[18rem]">
      <div className="relative h-[11rem] w-full xl:h-[18rem]">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className="heroCard"
          alt={alt}
        />
      </div>

      <div className="flex h-[4rem] w-full items-center justify-between px-4 xl:h-[5rem]">
        <div className="flex items-center space-x-3">
          <div className="relative h-6 w-6 xl:h-8 xl:w-8">
            <Image
              layout="fill"
              objectFit="cover"
              src={profile}
              className="heroUser"
              alt={profileAlt}
            />
          </div>
          <div>
            <p className="text-xs text-gray-300 xl:text-sm">{name}</p>
            <p className="text-md font-medium text-indigo-300 xl:text-xl">
              {price}
            </p>
          </div>
        </div>

        <Link href="#">
          <a onClick={payNow}>
            <div className="xl:text-md hidden w-fit space-x-2 rounded-2xl bg-teal-600 px-2 py-3 text-sm font-semibold shadow-lg shadow-teal-500/20 transition-all duration-300 hover:bg-teal-700 xl:flex xl:px-4">
              {btnText}
            </div>
          </a>
        </Link>
      </div>
    </div>
  </div>
)

const Hero = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://checkout.flutterwave.com/v3.js"
    document.getElementsByTagName("head")[0].appendChild(script)
  }, [])

  return (
    <>
      <div className="relative w-full">
        <div className="absolute -bottom-44 -left-4 h-72 w-72 animate-blob rounded-full bg-teal-500/50 mix-blend-overlay blur-2xl filter" />
        <div className="animation-delay-2000 absolute top-0 -right-4 h-96 w-96 animate-blob rounded-full bg-teal-200/20 mix-blend-overlay blur-2xl filter" />
        <div className="animation-delay-4000 absolute top-44 left-44 h-72 w-72 animate-blob rounded-full bg-indigo-300/30 mix-blend-overlay blur-2xl filter" />
      </div>

      <div className="absolute mx-auto mt-16 flex h-[400px] w-full bg-transparent px-20">
        <div className="h-full w-full bg-repeat heropattern-plus-gray-700"></div>
      </div>

      <div className="container relative z-20 mx-auto grid grid-cols-1 gap-x-4 gap-y-20 py-16 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <h1 className="mb-4 text-6xl font-bold xl:text-7xl">{heading1}</h1>
          <h2 className="mb-12 text-4xl font-bold text-teal-400 underline decoration-indigo-400/30 xl:text-5xl">
            {heading2}
          </h2>

          <p className="text-md mb-10 font-medium text-gray-300 xl:text-lg">
            {description}
          </p>

          {/* <div className="flex flex-col items-center space-x-4 space-y-4 sm:flex-row sm:space-y-0">
            <Link href={discordUrl} passHref>
              <a>
                <div className="flex w-fit space-x-2 rounded-2xl bg-gray-600 px-4 py-3 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-[1px] hover:bg-gray-700">
                  <span>{btnText1}</span> <FaDiscord size={24} />
                </div>
              </a>
            </Link>

            <Link href={openSeaUrl} passHref>
              <a>
                <div className="flex w-fit space-x-2 rounded-2xl bg-teal-600 px-4 py-3 font-semibold shadow-lg shadow-teal-500/20 transition-all duration-300 hover:-translate-y-[1px] hover:bg-teal-700">
                  <span>{btnText2}</span> <FaArrowRight size={22} />
                </div>
              </a>
            </Link>
          </div> */}
        </div>

        <div className="ml-10 flex justify-center">
          <Card
            name={topCard.name}
            price={topCard.price}
            btnText={topCard.btnText}
            profile={topCard.profile}
            image={topCard.image}
            // btnUrl={topCard.btnUrl}
            skewX="-skew-y-3 mt-24 z-10"
            skewY="skew-x-6"
            alt={topCard.alt}
            profileAlt={topCard.profileAlt}
          />

          <Card
            name={backCard.name}
            price={backCard.price}
            btnText={backCard.btnText}
            profile={backCard.profile}
            image={backCard.image}
            // btnUrl={backCard.btnUrl}
            skewX="skew-y-3 -translate-x-20 animate-pulse"
            skewY="-skew-x-6"
            alt={backCard.alt}
            profileAlt={backCard.profileAlt}
          />
        </div>
      </div>
    </>
  )
}

export default Hero
