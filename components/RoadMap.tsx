import React from "react"
import { roadmapHeading, roadmapSteps } from "../constants/constants"

interface CardProps {
  position: string
  title: string
  description: string
}

const Card = ({ position, title, description }: CardProps) => (
  <div className="my-3 flex flex-col items-center space-x-4 space-y-4 rounded-xl bg-gray-900 px-4 py-6 shadow-lg transition duration-300 hover:shadow-2xl lg:flex-row">
    <div className="z-50 rounded-full bg-teal-600 px-6 text-xl font-semibold shadow-lg shadow-teal-500/30">
      <span>{position}</span>
    </div>
    <div>
      <h3 className="mb-2 text-center text-2xl font-semibold lg:text-left">
        {title}
      </h3>
      <p className="text-center text-gray-300 lg:text-left">{description}</p>
    </div>
  </div>
)

const RoadMap = () => {
  return (
    <section id="roadmap" className="container relative mx-auto py-12">
      <h3 className="mb-8 text-center text-3xl font-semibold underline decoration-indigo-500/80 lg:text-left xl:text-4xl">
        {roadmapHeading}
      </h3>

      <div className="relative flex flex-col">
        <div className="absolute left-[50%] z-40 h-full w-[2px] rounded-full bg-indigo-300/60  blur-sm lg:left-[44px]" />
        {roadmapSteps.map(
          (step: { position: string; title: string; description: string }) => (
            <React.Fragment key={step.title}>
              <Card
                position={step.position}
                title={step.title}
                description={step.description}
              />
            </React.Fragment>
          )
        )}
      </div>
    </section>
  )
}

export default RoadMap
