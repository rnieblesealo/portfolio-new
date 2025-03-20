import AboutMe from "../sections/AboutMe";
import Intro from "../sections/Intro";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import PageContextProvider from "../components/PageContextProvider"

export default function Home() {
  return (
    <PageContextProvider>
      <Intro />
      <AboutMe />
      <Projects />
      <Experience />
      <div className="m-10" />
    </PageContextProvider>
  )
}
