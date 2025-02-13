import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <Intro />
        <AboutMe />
        <Projects />
        <Experience />
      </div>
      <Footer />
    </>
  )
}
