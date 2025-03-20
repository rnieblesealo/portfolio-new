import AboutMe from "../components/AboutMe";
import Intro from "../components/Intro";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
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
