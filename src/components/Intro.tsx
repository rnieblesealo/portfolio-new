import Languages from "./Languages"

import { FaHeart } from "react-icons/fa6"

export default function Intro() {
  // these are same as my email label
  const nameColors = [
    "#ec273f", // R
    "#e98537", // A
    "#5ab552", // F
    "#3388de", // A
    "#f3a833", // E
    "#cc99ff", // L
    "#26854c", // N
    "#3859b3", // I
    "#9a4d76", // E
    "#ce9248", // B
    "#5e5b8c", // L
    "#6e4c30", // E
    "#62a477"  // S
  ]

  const coloredName = "RafaelNiebles".split("").map((char, index) => {
    return (
      <span key={index} style={{ color: nameColors[index % nameColors.length] }}>{char}</span>
    )
  })

  // there is some honky css for the name to have a black bg behind it to hide gaps between chars that the stroke can't get to
  const picAndName = (
    <div className="flex flex-col items-center justify-center space-y-[-70px] mb-[40px] animate-jump-in">
      <div className="bg-black p-5 rounded-2xl">
        <img
          src="images/profile.jpg"
          alt="My picture"
          className="w-[260px] border-black box-border rounded-lg"
        />
      </div>
      <div className="relative mt-[50px] bg-black max-w-[50%] h-min-content flex items-center justify-center" >
        <h1 className="stroked min-w-[330px] min-h-[100px] text-[6rem] flex flex-wrap items-center justify-center text-center leading-[4.5rem] space-y-[-3px]">
          {coloredName}
        </h1>
      </div>
    </div >
  )

  return (
    <div id="home" className="flex flex-col items-center justify-center mt-5 mb-5">
      <h3 className="stroked-light">Hey there! My name's</h3>

      {picAndName}

      <h3 className="stroked-light mt-[-20px] mb-[-15px]">and I'm a</h3>
      <h2 className="stroked-less text-center stroked text-yellow text-[3rem]">Software Engineer</h2>
      <h3 className="stroked-light mt-[-15px]">who builds with</h3>

      <Languages />

      <h3 className="stroked-light flex items-center gap-3">and a whole lot of <span className="text-red text-[3rem]">{<FaHeart className="animate-jump animate-infinite animate-duration-1000" />}</span>!</h3>
    </div>
  )
}
