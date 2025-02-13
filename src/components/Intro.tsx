import PictureAndName from "./PictureAndName"
import Languages from "./Languages"

import { FaHeart } from "react-icons/fa6"

export default function Intro() {
  return (
    <div className="flex flex-col items-center justify-center mt-5 mb-5">
      <h3 className="stroked-light text-yellow">Hey there! My name is</h3>

      <PictureAndName />

      <h3 className="stroked-light mt-[-20px] mb-[-15px]">and I'm a</h3>
      <h2 className="stroked-less text-center stroked text-yellow-300 text-[3rem]">Software Engineer</h2>
      <h3 className="stroked-light mt-[-15px]">who builds with</h3>

      <Languages />

      <h3 className="stroked-light flex items-center gap-3">and a whole lot of <span className="text-red-600 text-[3rem]">{<FaHeart />}</span>!</h3>
    </div>
  )
}
