import { useState } from "react";
import { UsePageContext } from "./PageContextProvider"

import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import { Link } from "react-router-dom"

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
    const enlargedIcon = (
      <p className="text-[2rem]">
        {link.icon}
      </p>
    )

    return (
      <li key={link.id}>
        <button onClick={hideMobileNavMenu}>
          <Link className="text-hoverable animate-fade-left flex items-center justify-center gap-2" to={link.link} target={link.newTab ? "_blank" : ""}>
            {link.icon && enlargedIcon}
            {link.text}
          </Link>
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
      <ul className="bg-black fixed top-0 w-screen h-screen text-[1rem] font-bold flex flex-col items-center gap-4 p-4 z-10">
        {bigButtons}
      </ul>
    </div>
  )

  return (
    <>
      <nav className="bg-black flex items-center p-2 w-screen h-[70px] sticky top-0 z-[999]">
        <div className="flex w-full items-center flex-row gap-3 animate-fade-left">
          <img
            src="/images/icon.png"
            alt="Small icon of me"
            className="w-full max-w-[50px]"
          />
          <a href="#home" className="font-bold text-hoverable">
            <p>Rafael Niebles</p>
          </a>
        </div>
        {context.isSmall ? (mobileNavActive ? closeButton : burgerButton) : bigButtonCollection}
      </nav>
      {mobileNavActive && mobileNavMenu}
    </>
  )
}
