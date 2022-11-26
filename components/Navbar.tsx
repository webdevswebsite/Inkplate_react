import React, { useEffect, useState } from "react"
import {
  // logo,
  // logoAlt,
  discordUrl,
  instagramUrl,
  twitterUrl,
  openSeaUrl,
  pages,
  mobileMenuHeading,
} from "../constants/constants"
// import Image from "next/image"
import Link from "next/link"
import {
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaBars,
  FaTimes,
} from "react-icons/fa"

interface MediaProps {
  icon: React.ReactNode
  link: string
  bg: string
  bgHover: string
}

const MediaIcon = ({ icon, link, bg, bgHover }: MediaProps) => (
  <Link href={link} passHref>
    <a>
      <div
        className={`rounded-full ${bg} ${bgHover} p-2 shadow-lg shadow-white/10 transition duration-300 hover:scale-110`}
      >
        {icon}
      </div>
    </a>
  </Link>
)

const MobileMenu = () => (
  <div className="relative z-50 flex w-full flex-col space-y-4 bg-transparent px-6 pb-2 pt-8">
    <h4 className="mb-2 text-lg">{mobileMenuHeading}</h4>

    {pages.map((page: { name: string; id: string }) => (
      <Link href={page.id} key={page.id}>
        <a className="text-gray-300 transition duration-300 hover:text-white">
          {page.name}
        </a>
      </Link>
    ))}

    <div className="flex items-center space-x-4">
      <MediaIcon
        icon={<FaDiscord size={28} />}
        link={discordUrl}
        bg="bg-gray-500"
        bgHover="hover:bg-gray-600"
      />
      <MediaIcon
        icon={<FaInstagram size={28} />}
        link={instagramUrl}
        bg="bg-indigo-400"
        bgHover="hover:bg-indigo-500"
      />
      <MediaIcon
        icon={<FaTwitter size={28} />}
        link={twitterUrl}
        bg="bg-indigo-400"
        bgHover="hover:bg-indigo-500"
      />
    </div>
    <Link href={openSeaUrl} passHref>
      <a>
        <div className="w-fit rounded-2xl bg-gradient-to-r from-indigo-500 via-teal-600 to-indigo-500 bg-size-200 bg-pos-0 px-4 py-2 font-semibold shadow-lg shadow-white/10 transition-all duration-300 hover:bg-pos-100">
          View on OpenSea
        </div>
      </a>
    </Link>
  </div>
)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.onresize = () => setMenuOpen(false)
  }, [])

  return (
    <>
      <div className="fixed z-[100] flex w-full flex-col bg-gray-800/40 p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" passHref>
              <a>
                <div className="relative flex h-10 w-52 items-center">
                  <h1
                    style={{
                      fontSize: "20px",
                      width: "500px",
                      color: "#2DD4BF",
                    }}
                  >
                    {" "}
                    <b>Inkplate Technologies</b>{" "}
                  </h1>
                  {/* <Image
                    src={logo}
                    alt={logoAlt}
                    layout="fill"
                    objectFit="contain"
                  /> */}
                </div>
              </a>
            </Link>

            <div className="ml-10 hidden xl:flex">
              <div className="space-x-6">
                {pages.map((page: { name: string; id: string }) => (
                  <Link href={page.id} key={page.id}>
                    <a className="text-gray-300 transition duration-300 hover:text-white">
                      {page.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="hidden items-center space-x-4 md:inline-flex">
            <MediaIcon
              icon={<FaDiscord size={28} />}
              link={discordUrl}
              bg="bg-gray-500"
              bgHover="hover:bg-gray-700"
            />
            <MediaIcon
              icon={<FaInstagram size={28} />}
              link={instagramUrl}
              bg="bg-indigo-400"
              bgHover="hover:bg-indigo-500"
            />
            <MediaIcon
              icon={<FaTwitter size={28} />}
              link={twitterUrl}
              bg="bg-indigo-400"
              bgHover="hover:bg-indigo-500"
            />

            <Link href={openSeaUrl} passHref>
              <a>
                <div className="rounded-2xl bg-gradient-to-r from-indigo-500 via-teal-600 to-indigo-500 bg-size-200 bg-pos-0 px-4 py-2 font-semibold shadow-lg shadow-white/10 transition-all duration-300 hover:bg-pos-100">
                  View on OpenSea
                </div>
              </a>
            </Link>
          </div> */}

          <div className="inline-flex md:hidden">
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className={`cursor-pointer rounded-full ${
                menuOpen ? "bg-teal-500" : "bg-indigo-500"
              } p-2 shadow-lg shadow-white/10 transition-colors ${
                menuOpen ? "hover:bg-teal-600" : "hover:bg-indigo-600"
              }`}
            >
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </div>
          </div>
        </div>
        <div className={menuOpen ? "inline" : "hidden"}>
          <MobileMenu />
        </div>
      </div>
    </>
  )
}

export default Navbar
