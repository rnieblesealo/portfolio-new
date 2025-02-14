import { createContext, useContext, useState } from "react"
import { useEffect } from "react"
import clsx from "clsx"

const PageContext = createContext<any | null>(null) // string refers to type of value we give in to .Provider

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Clouds() {
  return (
    <div className="z-[0]">
      <img
        src="images/cloud-b.png"
        alt="Decorative cloud"
        className="fixed pixelated z-0 w-[10rem] top-[50%] left-[70%] opacity-[80%]"
      />
      <img
        src="images/cloud-b.png"
        alt="Decorative cloud"
        className="fixed pixelated z-0 w-[10rem] top-[15%] left-[10%] opacity-[80%]"
      />
      <img
        src="images/cloud-b.png"
        alt="Decorative cloud"
        className="fixed pixelated z-0 w-[10rem] top-[80%] left-[15%] opacity-[80%] transform scale-x-[-1]"
      />
    </div>
  )
}

export default function PageContextProvider({ children }: { children?: React.ReactNode }) {
  const smallThresholdPx = 576

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
    "w-min-content",
    "h-min-content",
    "relative",
    "bg-gradient-to-b from-blue-500 to-pink-700",
    "z-[1]"
  )

  return (
    <>
      <div className={mainContainerStyle}>
        <Clouds />
        <PageContext.Provider value={contextInfo}>
          <div className="z-[1] relative">
            <NavBar />
            <div className="flex flex-col items-center justify-center mb-10">
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
