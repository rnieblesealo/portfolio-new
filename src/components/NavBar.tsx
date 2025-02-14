import { useState } from "react";
import { UsePageContext } from "./PageContextProvider"

import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

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

  const bigButtons = (
    <ul className="text-[1rem] font-bold flex flex-row items-center ml-auto gap-4 h-min-content">
      <li>Home</li>
      <li>About</li>
      <li>Experience</li>
      <li>Projects</li>
    </ul>
  )

  const burgerButton = (
    <button className="text-[2rem]" onClick={showMobileNavMenu}>
      <GiHamburgerMenu />
    </button>
  )

  const closeButton = (
    <button className="text-[2.5rem]" onClick={hideMobileNavMenu}>
      <IoCloseSharp />
    </button >
  )

  const mobileNavMenu = (
    <div>
      <ul className="bg-black relative w-screen h-screen text-[2rem] font-bold flex flex-col items-center gap-4 p-4 z-10">
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
      </ul>
    </div>
  )

  return (
    <>
      <nav className="bg-black flex items-center p-2">
        <div className="flex w-full items-center flex-row gap-3">
          <img
            src="images/icon.png"
            alt="Small icon of me"
            className="w-full max-w-[50px]"
          />
          <p className="font-tiny5">Rafael Niebles</p>
        </div>
        {context.isSmall ? (mobileNavActive ? closeButton : burgerButton) : bigButtons}
      </nav>
      {mobileNavActive && mobileNavMenu}
    </>
  )
}
