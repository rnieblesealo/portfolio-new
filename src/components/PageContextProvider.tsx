import { createContext, useContext, useState } from "react"
import { useEffect } from "react"
import clsx from "clsx"

const PageContext = createContext<any | null>(null) // string refers to type of value we give in to .Provider

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Clouds() {
  const cloudStyle = clsx(
    "fixed pixelated z-1 w-[10rem] opacity-[80%]"
  )

  const cloud = (top: number, left: number) => (
    <img
      src="/images/cloud-b.png"
      alt="Decorative cloud"
      className={cloudStyle}
      style={{ top: `${top}%`, left: `${left}%` }}
    />
  )

  return (
    <div className="w-full h-full absolute z-1">
      {cloud(15, 8)}
      {cloud(50, 85)}
      {cloud(90, 20)}
    </div>
  )
}

export default function PageContextProvider({ children, theme }: { children?: React.ReactNode, theme?: "day" | "night" | "solid" }) {
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

  const themeStyle = clsx(
    (!theme || theme === "day") && "bg-gradient-to-b from-blue-500 to-pink-700",
    theme === "night" && "bg-gradient-to-b from-black to-gray-900",
    theme === "solid" && "bg-gray-800"
  )

  return (
    <>
      <div className={`w-screen absolute z-2 ${themeStyle}`}>
        {theme != "solid" && <Clouds />}
        <PageContext.Provider value={contextInfo}>
          <div className="z-3 relative">
            <NavBar />
            <div className="min-h-[85vh] flex flex-col items-center justify-top">
              {children}
            </div>
            <Footer />
          </div >
        </PageContext.Provider >
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
