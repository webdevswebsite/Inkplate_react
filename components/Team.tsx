import Image from "next/image"
import Link from "next/link"
import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { team, teamHeading } from "../constants/constants"

const CardImage = ({
  image,
  username,
  alt,
  userLink,
}: {
  image: string
  username: string
  alt: string
  userLink: string
}) => (
  <div className="my-10 flex flex-col items-center">
    <div className="relative mx-auto h-[18rem] w-[18rem] transition-transform duration-300 hover:rotate-2 hover:scale-105">
      <Image
        src={image}
        alt={alt}
        layout="fill"
        objectFit="contain"
        className="teamImage"
      />
    </div>

    <Link href={userLink} passHref>
      <a target="_blank">
        <div className="mt-6 rounded-full border-2 border-indigo-500 px-4 py-2 transition duration-300 hover:bg-indigo-500">
          {username}
        </div>
      </a>
    </Link>
  </div>
)

const Team = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1281,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 768,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1280,
        min: 769,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  }

  return (
    <section
      id="team"
      className="gallery container relative z-10 mx-auto bg-repeat py-12 heropattern-plus-gray-700"
    >
      <h3 className="mb-8 text-center text-3xl font-semibold underline decoration-indigo-500/80 lg:text-left xl:text-4xl">
        {teamHeading}
      </h3>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="team-slider"
        draggable
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {team.map(
          (
            user: {
              url: string
              alt: string
              username: string
              userLink: string
            },
            i: number
          ) => (
            <React.Fragment key={user.username + i}>
              <CardImage
                image={user.url}
                username={user.username}
                alt={user.alt}
                userLink={user.userLink}
              />
            </React.Fragment>
          )
        )}
      </Carousel>
    </section>
  )
}

export default Team
