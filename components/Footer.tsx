import Link from "next/link"
import React from "react"
// import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa"
import {
  permissions
} from "../constants/constants"

interface MediaProps {
  icon: React.ReactNode
  link: string
}

const MediaIcon = ({ icon, link }: MediaProps) => (
  <Link href={link} passHref>
    <a>
      <div className="rounded-full bg-gray-900/40 p-2 transition duration-300 hover:scale-110">
        {icon}
      </div>
    </a>
  </Link>
)

const Footer = () => {
  return (
    <div className="bg-transparent py-10 text-gray-300">
      <div className="container mx-auto flex items-center justify-between">
        {/* <div className="flex items-center space-x-4">
          <MediaIcon icon={<FaDiscord size={28} />} link={discordUrl} />
          <MediaIcon icon={<FaInstagram size={28} />} link={instagramUrl} />
          <MediaIcon icon={<FaTwitter size={28} />} link={twitterUrl} />
        </div> */}
        <p className="text-lg">&copy; {permissions}</p>
      </div>
    </div>
  )
}

export default Footer
