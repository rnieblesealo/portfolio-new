import { createContext, useContext, useState } from "react"
import { useEffect } from "react"
import clsx from "clsx"

const PageContext = createContext<any | null>(null) // string refers to type of value we give in to .Provider

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";

// this parameter is absolutely f******ing hideous, fix it later...
function Clouds({ dimmer }: { dimmer?: boolean }) {
  const cloudStyle = clsx(
    "fixed pixelated z-1 w-[10rem]",
    dimmer ? "opacity-[10%]" : "opacity-[80%]"
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

  // this is the # bit in the address bar that tells what div to go to
  const { hash } = useLocation()

  // this scrolls that div into view when in the address
  useEffect(() => {
    if (hash) {
      const locationElement = document.getElementById(hash.replace("#", ""))
      if (locationElement) {
        locationElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  })

  // this sends children that need it msg that we are small
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
    (!theme || theme === "day") && "bg-gradient-to-b from-blue-500 to-blue-700",
    theme === "night" && "bg-gradient-to-b from-black to-slate-900 ",
    theme === "solid" && "bg-gray-800"
  )

  return (
    <>
      <div className={`w-screen absolute z-2 ${themeStyle}`}>
        {theme != "solid" && <Clouds dimmer={theme === "night"} />}
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
