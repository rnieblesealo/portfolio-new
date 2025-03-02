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

    "", // SPACE 
    "", // SPACE 
    "", // SPACE 
    "", // SPACE 
    "", // SPACE 

    "#31A278", // N
    "#2354BE", // I
    "#C33B5C", // E
    "#D8B208", // B
    "#AD58E3", // L
    "#96DC08", // E
    "#26DCF1"  // S
  ]

  const coloredName = "Rafael     Niebles".split("").map((char, index) => {
    return (
      <span key={index} style={{ color: nameColors[index % nameColors.length] }}>{char}</span>
    )
  })

  // there is some honky css for the name to have a black bg behind it to hide gaps between chars that the stroke can't get to
  const picAndName = (
    <div className="w-min-content h-min-content flex flex-col items-end justify-start space-y-[-70px]">
      <h1 className="stroked min-w-[330px] min-h-[100px] text-[6rem] flex flex-wrap items-center justify-center text-center leading-[4.5rem] space-y-[-3px] gap-1">
        {coloredName}
      </h1>
    </div >
  )

  return (
    <div id="home" className="w-full h-full flex flex-col items-end justify-center">
      <div className="stroked-less mr-[70px] flex flex-col items-end justify-end z-[999]">
        {picAndName}
        <h1 className="stroked-less mt-[-10px] text-yellow-300 text-[3rem] flex items-center justify-center gap-10 mb-1">
          Software Engineer
        </h1>
        <p className="bg-[#0d1931] pl-5 pr-5 rounded-full font-tiny5 font-bold text-[1.25rem] flex items-center gap-2 p-1">"Made by Rafa with <span className="text-red-500"><FaHeart /></span>"</p>
      </div>
    </div>
  )
}
