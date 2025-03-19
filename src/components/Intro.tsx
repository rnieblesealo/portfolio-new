import Languages from "./Languages"

import { FaHeart } from "react-icons/fa6"

export default function Intro() {
  // these are same as my email label
  const nameColors = [
    "#ED3B3B", // R
    "#FF9B33", // A
    "#32C65B", // F
    "#1889E1", // A
    "#F5E209", // E
    "#733BED", // L
  ]

  const lastNameColors = [
    "#31A278", // N
    "#2354BE", // I
    "#C33B5C", // E
    "#D8B208", // B
    "#AD58E3", // L
    "#96DC08", // E
    "#26DCF1"  // S
  ]

  const coloredName = "Rafael".split("").map((char, index) => {
    return (
      <span key={index} style={{ color: nameColors[index % nameColors.length] }}>{char}</span>
    )
  })

  const coloredLastName = "Niebles".split("").map((char, index) => {
    return (
      <span key={index} style={{ color: lastNameColors[index % lastNameColors.length] }}>{char}</span>
    )
  })

  const name = (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-1">
        {coloredName}
      </div>
      <div className="flex items-center justify-center gap-1">
        {coloredLastName}
      </div>
    </div>
  )

  // there is some honky css for the name to have a black bg behind it to hide gaps between chars that the stroke can't get to
  const picAndName = (
    <div className="flex flex-col items-center justify-center space-y-[-70px] animate-jump-in">
      <div className="bg-black p-5 rounded-2xl">
        <img
          src="images/profile.jpg"
          alt="My picture"
          className="w-[260px] border-black box-border rounded-lg"
        />
      </div>
      <h1 className="stroked-less font-jersey10 font-bold w-full text-[6rem] flex flex-wrap items-center justify-center text-center leading-[3.8rem] gap-2">
        {name}
      </h1>
    </div >
  )

  return (
    <div id="home" className="flex flex-col items-center justify-center mt-5 mb-5 font-bold text-2xl gap-2">
      <h3 className="stroked-light text-yellow">Hey there! My name's</h3>

      {picAndName}

      <h3 className="stroked-light">and I'm a</h3>
      <h2 className="stroked-less font-jersey10 font-bold text-center stroked text-yellow-300 text-5xl">Software Engineer</h2>
      <h3 className="stroked-light">who builds with</h3>

      <Languages />

      <h3 className="stroked-light flex items-center gap-3">and a whole lot of <span className="text-red-700 text-[3rem]">{<FaHeart className="animate-jump animate-infinite animate-duration-1000" />}</span>!</h3>
    </div>
  )
}
