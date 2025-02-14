import { useState } from "react";
import { UsePageContext } from "./PageContextProvider"

import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import links from "../../data/Links"

export default function NavBar() {
  const context = UsePageContext()

  const [mobileNavActive, setMobileNavActive] = useState(false)

  const showMobileNavMenu = () => {
    setMobileNavActive(true)
    document.body.style.overflow = "hidden"
  }

  const hideMobileNavMenu = () => {
    setMobileNavActive(false)
    document.body.style.overflow = "visible"
  }

  const bigButtons = links.map((link) => {
    return (
      <li key={link.id}>
        <button onClick={hideMobileNavMenu}>
          <a className="text-hoverable animate-fade-left flex items-center justify-center gap-2" href={link.link} target="_blank">
            <p className="text-[2rem]">
              {link.icon}
            </p>
            {link.text}
          </a>
        </button>
      </li>
    )
  })

  const bigButtonCollection = (
    <ul className="text-[1rem] font-bold flex flex-row items-center ml-auto gap-4 h-min-content">
      {bigButtons}
    </ul>
  )

  // NOTE: giving keys triggers react's reconciliation to reload EVERYTHING for this component 
  // this is because it will be treated as a unique element
  // ...which reruns the animation we want :)

  const burgerButton = (
    <button key="burger" className="text-hoverable text-[2rem] animate-jump-in" onClick={showMobileNavMenu}>
      <GiHamburgerMenu />
    </button>
  )

  const closeButton = (
    <button key="close" className="text-hoverable text-[2.5rem] animate-jump-in" onClick={hideMobileNavMenu}>
      <IoCloseSharp />
    </button >
  )

  const mobileNavMenu = (
    <div>
      <ul className="bg-black relative w-screen h-screen text-[2rem] font-bold flex flex-col items-center gap-4 p-4 z-10">
        {bigButtons}
      </ul>
    </div>
  )

  return (
    <>
      <nav className="bg-black flex items-center p-2 sticky w-screen">
        <div className="flex w-full items-center flex-row gap-3">
          <img
            src="images/icon.png"
            alt="Small icon of me"
            className="w-full max-w-[50px]"
          />
          <a href="#home" className="font-tiny5 font-bold text-hoverable">
            <p>Rafael Niebles</p>
          </a>
        </div>
        {context.isSmall ? (mobileNavActive ? closeButton : burgerButton) : bigButtonCollection}
      </nav>
      {mobileNavActive && mobileNavMenu}
    </>
  )
}
