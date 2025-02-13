import { createContext, useContext } from "react"

const PageContext = createContext<string>(null) // string refers to type of value we give in to .Provider

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Clouds() {
  return (
    <div>
      <img
        src="images/cloud-b.png"
        alt="Decorative cloud"
        className="fixed pixelated w-[10rem] z-[-1] top-[50%] left-[85%]"
      />
      <img
        src="images/cloud-b.png"
        alt="Decorative cloud"
        className="fixed pixelated w-[10rem] z-[-1] top-[15%] left-[10%]"
      />
      <img
        src="images/cloud-b.png"
        alt="Decorative cloud"
        className="fixed pixelated w-[10rem] z-[-1] top-[80%] left-[15%] transform scale-x-[-1]"
      />
    </div>
  )
}

export default function PageContextProvider({ children }: { children?: React.ReactNode }) {
  const contextInfo = "test" // not using rn but might later; leave setup

  return (
    <PageContext.Provider value={contextInfo}>
      <div>
        <Clouds />
      </div>
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
      <Footer />
    </PageContext.Provider>
  )
}
