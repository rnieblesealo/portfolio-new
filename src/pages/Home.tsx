import AboutMe from "../components/AboutMe";
import Intro from "../components/Intro";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import PageContextProvider from "../components/PageContextProvider"

import { useLocation } from "react-router-dom"
import { useEffect } from "react"

export default function Home() {
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

  return (
    <PageContextProvider>
      <Intro />
      <AboutMe />
      <Projects />
      <Experience />
    </PageContextProvider>
  )
}
