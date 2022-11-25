import React, { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa"
import { faq, faqHeading } from "../constants/constants"

const Accordion = ({
  question,
  answer,
}: {
  question: string
  answer: string
}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="my-6">
      <div
        className={`${
          open ? "rounded-2xl" : "rounded-t-2xl bg-teal-600/80"
        } flex w-full cursor-pointer select-none items-center justify-between border-2 border-teal-600/30 px-4 py-4 text-gray-300 transition duration-300 hover:border-teal-600/80 hover:text-white`}
        onClick={() => setOpen(!open)}
      >
        <h4 className="text-lg font-medium">{question}</h4>
        {open ? <FaPlus size={22} /> : <FaMinus size={22} />}
      </div>

      <div
        className={`${
          open ? "hidden" : "inline-flex"
        } w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-teal-600/30 px-4 py-4 text-gray-300`}
      >
        <h5>{answer}</h5>
      </div>
    </div>
  )
}

const FAQ = () => {
  return (
    <section id="faq" className="container relative mx-auto py-12">
      <h3 className="mb-14 text-center text-3xl font-semibold underline decoration-indigo-500/80 lg:text-left xl:text-4xl">
        {faqHeading}
      </h3>
      {faq.map((element: { question: string; answer: string }) => (
        <React.Fragment key={element.question}>
          <Accordion question={element.question} answer={element.answer} />
        </React.Fragment>
      ))}
    </section>
  )
}

export default FAQ
