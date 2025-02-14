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
    "#31A278", // N
    "#2354BE", // I
    "#C33B5C", // E
    "#D8B208", // B
    "#AD58E3", // L
    "#96DC08", // E
    "#26DCF1"  // S
  ]

  const coloredName = "RafaelNiebles".split("").map((char, index) => {
    return (
      <span style={{ color: nameColors[index % nameColors.length] }}>{char}</span>
    )
  })

  // there is some honky css for the name to have a black bg behind it to hide gaps between chars that the stroke can't get to
  const picAndName = (
    <div className="flex flex-col items-center justify-center space-y-[-70px] mb-[40px]">
      <div className="bg-black p-5 rounded-2xl">
        <img
          src="images/profile.jpg"
          alt="My picture"
          className="w-[260px] border-black box-border rounded-lg"
        />
      </div>
      <div className="relative mt-[50px] bg-black w-[300px] h-min-content flex items-center justify-center" >
        <h1 className="stroked min-w-[350px] min-h-[100px] text-[6.5rem] flex flex-wrap items-center justify-center text-center leading-[4.5rem] space-y-[-3px]">
          {coloredName}
        </h1>
      </div>
    </div >
  )

  return (
    <div className="flex flex-col items-center justify-center mt-5 mb-5">
      <h3 className="stroked-light text-yellow">Hey there! My name's</h3>

      {picAndName}

      <h3 className="stroked-light mt-[-20px] mb-[-15px]">and I'm a</h3>
      <h2 className="stroked-less text-center stroked text-yellow-300 text-[3rem]">Software Engineer</h2>
      <h3 className="stroked-light mt-[-15px]">who builds with</h3>

      <Languages />

      <h3 className="stroked-light flex items-center gap-3">and a whole lot of <span className="text-red-600 text-[3rem]">{<FaHeart />}</span>!</h3>
    </div>
  )
}
