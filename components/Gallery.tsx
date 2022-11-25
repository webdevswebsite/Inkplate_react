import Image from "next/image"
import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { images, galleryHeading } from "../constants/constants"

const CardImage = ({ image, alt }: { image: string; alt: string }) => (
  <div className="relative mx-auto my-10 h-[18rem] w-[18rem] shadow-xl transition-transform duration-300 hover:rotate-2 hover:scale-105">
    <Image
      src={image}
      layout="fill"
      objectFit="contain"
      className="galleryImage"
      alt={alt}
    />
  </div>
)

const Gallery = () => {
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
      className="gallery container relative z-10 mx-auto py-10"
      id="gallery"
    >
      <h3 className="mb-4 text-center text-3xl font-semibold underline decoration-indigo-500/80 lg:text-left xl:text-4xl">
        {galleryHeading}
      </h3>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="gallery-slider"
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
        {images.map((image: { url: string; alt: string }, i: number) => (
          <React.Fragment key={`galleryImage${i}`}>
            <CardImage image={image.url} alt={image.alt} />
          </React.Fragment>
        ))}
      </Carousel>
    </section>
  )
}

export default Gallery
