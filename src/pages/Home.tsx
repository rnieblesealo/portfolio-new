import AboutMe from "../components/AboutMe";
import Intro from "../components/Intro";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Projects />
      <Experience />
      <div className="m-10" />
    </div>
  )
}
