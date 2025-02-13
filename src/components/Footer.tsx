import { FaHeart } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-black w-full h-min-content flex justify-center items-center p-3">
      <p className="font-tiny5 font-bold flex items-center justify-center gap-2">Made by Rafa with <span className="text-red-600">{<FaHeart />}</span></p>
    </div>
  )
}
