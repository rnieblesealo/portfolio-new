import { createContext, useContext } from "react"

const PageContext = createContext<string>("") // string refers to type of value we give in to .Provider

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Clouds() {
  return (
    <div>
      <img
        src="images/cloud-b.png"
        alt="Decorative cloud"
        className="fixed pixelated w-[10rem] top-[50%] left-[85%]"
      />
      <img
        src="images/cloud-b.png"
        alt="Decorative cloud"
        className="fixed pixelated w-[10rem] top-[15%] left-[10%]"
      />
      <img
        src="images/cloud-b.png"
        alt="Decorative cloud"
        className="fixed pixelated w-[10rem] top-[80%] left-[15%] transform scale-x-[-1]"
      />
    </div>
  )
}

export default function PageContextProvider({ children }: { children?: React.ReactNode }) {
  const contextInfo = "test" // not using rn but might later; leave setup

  // NOTE: need to make parent div and contents relative for some reason
  // look up css stacking contexts
  // mind boggling!

  return (
    <>
      <div className="bg-blue-500 z-[-1] relative">
        <PageContext.Provider value={contextInfo}>
          <Clouds />
          <div className="z-[1] relative">
            <NavBar />
            <div className="flex flex-col items-center justify-center mt-10 mb-10">
              {children}
            </div>
            <Footer />
          </div>
        </PageContext.Provider>
      </div>
    </>
  )
}
