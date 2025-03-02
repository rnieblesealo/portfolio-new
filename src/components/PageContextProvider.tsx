import { createContext, useContext, useState } from "react"
import { useEffect } from "react"
import clsx from "clsx"

const PageContext = createContext<any | null>(null) // string refers to type of value we give in to .Provider

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Clouds() {
  const cloudStyle = clsx(
    "absolute pixelated z-1 w-[15rem] opacity-[40%]"
  )

  const cloud = (top: number, left: number) => (
    <img
      src="images/cloud-b.png"
      alt="Decorative cloud"
      className={cloudStyle}
      style={{ top: `${top}%`, left: `${left}%` }}
    />
  )

  return (
    <div className="w-full h-full absolute z-1">
      {cloud(15, -3)}
      {cloud(40, 40)}
      {cloud(90, 10)}
      {cloud(-10, 90)}
    </div>
  )
}

export default function PageContextProvider({ children }: { children?: React.ReactNode }) {
  const smallThresholdPx = 1024

  const [isSmall, setIsSmall] = useState(window.innerWidth < smallThresholdPx)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsSmall(window.innerWidth < smallThresholdPx)
    })
  }, [])

  const contextInfo = {
    isSmall,
    setIsSmall,
  }

  // NOTE: need to make parent div and contents relative for some reason
  // look up css stacking contexts
  // mind boggling!

  const mainContainerStyle = clsx(
    "w-[1584px]",
    "h-[396px]",
    "absolute",
    "bg-gradient-to-b from-blue-500 to-blue-500",
    "z-2"
  )

  return (
    <>
      <div className={mainContainerStyle}>
        <Clouds />
        {children}
      </div >
    </>
  )
}

export function UsePageContext() {
  const context = useContext(PageContext)
  if (!context) {
    throw Error("No page context defined!")
  }

  return context
}
