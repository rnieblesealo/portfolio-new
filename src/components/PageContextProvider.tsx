import { createContext, useContext, useState } from "react"
import { useLocation, Outlet } from "react-router-dom";
import { useEffect } from "react"

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import clsx from "clsx"

type ContextInfo = {
  isSmall: boolean;
  setIsSmall: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const PageContext = createContext<ContextInfo | undefined>(undefined)

export default function PageContextProvider() {
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

  // threshold before we trigger navbar
  const smallThresholdPx = 1024

  // this is the # bit in the address bar that tells what div to go to
  const { hash } = useLocation()

  // this scrolls that div into view when it changes
  useEffect(() => {
    if (hash) {
      const locationElement = document.getElementById(hash.replace("#", ""))
      if (locationElement) {
        locationElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [hash])

  // this sends children that need it msg that we are small
  const [isSmall, setIsSmall] = useState(window.innerWidth < smallThresholdPx)

  // dark mode enable; check system to enable by default
  const [isDark, setIsDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsSmall(window.innerWidth < smallThresholdPx)
    })
  }, [])


  // NOTE: need to make parent div and contents relative for some reason
  // look up css stacking contexts
  // mind boggling!

  const themeStyle = clsx(
    isDark ? "bg-gradient-to-b from-black to-slate-900" : "bg-gradient-to-b from-blue-500 to-blue-700"
  )

  return (
    <div className={`w-screen absolute z-2 ${themeStyle}`}>
      <Clouds dimmer={isDark} />
      <PageContext.Provider value={{
        isSmall,
        setIsSmall,
        isDark,
        setIsDark
      }}>
        <div className="z-3 relative">
          <NavBar />
          <div className="min-h-[85vh] flex flex-col items-center justify-top">
            <Outlet />
          </div>
          <Footer />
        </div >
      </PageContext.Provider >
    </div>
  )
}

export function UsePageContext() {
  const context = useContext(PageContext)
  if (!context) {
    throw Error("No page context defined!")
  }

  return context
}
