import { FaHeart } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-black w-full min-h-[100px] flex justify-center items-start p-3">
      <p className="font-tiny5 font-bold flex items-center justify-center gap-2">Made by Rafa with <span className="text-red-600">{<FaHeart className="animate-jump animate-infinite animate-duration-1000"/>}</span></p>
    </div>
  )
}
