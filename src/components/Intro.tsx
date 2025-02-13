import PictureAndName from "./PictureAndName"
import Languages from "./Languages"

import { FaHeart } from "react-icons/fa6"

export default function Intro() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-yellow">Hey there! My name is</h3>

      <PictureAndName />

      <h3>and I'm a</h3>
      <h2 className="text-yellow-300">Software Engineer</h2>
      <h3>who builds with</h3>

      <Languages />

      <h3 className="flex items-center gap-3">and a whole lot of <span className="text-red-500">{<FaHeart />}</span>!</h3>
    </div>
  )
}
