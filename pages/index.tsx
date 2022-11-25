import type { NextPage } from "next"
import React from "react"
// import FAQ from "../components/FAQ"
import Feature from "../components/Feature"
import FeatureReverse from "../components/FeatureReverse"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
// import RoadMap from "../components/RoadMap"
// import Team from "../components/Team"
import { features } from "../constants/constants"

const Home: NextPage = () => {
  return (
    <main className="w-full pt-24">
      <Hero />
      <Gallery />
      <section id="features">
        {features.map(
          (feature: {
            reversed: boolean
            title: string
            description: string
            image: string
            imageAlt: string
          }) => {
            if (feature.reversed) {
              return (
                <React.Fragment key={feature.title}>
                  <FeatureReverse
                    title={feature.title}
                    description={feature.description}
                    image={feature.image}
                    alt={feature.imageAlt}
                  />
                </React.Fragment>
              )
            } else {
              return (
                <React.Fragment key={feature.title}>
                  <Feature
                    title={feature.title}
                    description={feature.description}
                    image={feature.image}
                    alt={feature.imageAlt}
                  />
                </React.Fragment>
              )
            }
          }
        )}
      </section>
      {/* <RoadMap /> */}
      {/* <Team /> */}
      {/* <FAQ /> */}
    </main>
  )
}

export default Home
