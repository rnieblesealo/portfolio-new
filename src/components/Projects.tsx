import { IoPeopleSharp } from "react-icons/io5";
import { RiShareBoxLine } from "react-icons/ri";

export default function Projects() {
  type ProjectsItem = {
    id: string,
    name: string,
    desc: string,
    langs: string[],
    teamSize?: number,
    imgSrc?: string,
    color?: string,
    url?: string
  }

  const rafaGhLink = (repoName: string) => {
    return `https://github.com/rnieblesealo/${repoName}`
  }

  const projects: ProjectsItem[] = [
    {
      id: "micro",
      name: "Microtransistor",
      desc: "First-person action FPS with AI-powered enemies, perk machines, and some chonky guns!",
      langs: ["unity", "csharp"],
      imgSrc: "images/compressed-gifs/microtransistor.gif",
      color: "#b00003",
      url: "https://www.instagram.com/microtransistor/"
    },
    {
      id: "memwell",
      name: "Memory Well",
      desc: "Official website for the band Memory Well. My first freelance project!",
      langs: ["javascript", "react", "tailwindcss", "vite", "axios"],
      imgSrc: "images/compressed-gifs/memwell.gif",
      color: "purple",
      url: rafaGhLink("memorywell")
    },
    {
      id: "kanjo",
      name: "Kanjo.ai",
      desc: "Custom neural network for an emotion recognition ML model.",
      langs: ["python", "pytorch"],
      imgSrc: "images/compressed-gifs/kanjo-will.gif",
      color: "#5c9856",
      url: rafaGhLink("kanjoai")
    },
    {
      id: "sofieski",
      name: "Sofieski's Wordles",
      desc: "WhatsApp bot that auto-detects and stores Wordle solutions! Gift for my friend Sofia :)",
      langs: ["typescript", "react", "supabase"],
      imgSrc: "images/compressed-gifs/sofieski.gif",
      color: "#EB6AAA",
      url: rafaGhLink("sofieski-wordles")
    },
    {
      id: "bromo",
      name: "Bromodoro",
      desc: "Full-stack gamified productivity app using the Pomodoro Technique.",
      langs: ["typescript", "react", "supabase"],
      imgSrc: "images/bromodoro-img.png",
      color: "#FF0100",
      url: "https://github.com/Frankelly-Guzman/Bromodoro"
    },
    {
      id: "spyder",
      name: "The Spyder",
      desc: "Dodge traffic as you escape a giant deadly spider! Survival is futile. Intern project built for HYEL!",
      langs: ["swift", "xcode", "figma"],
      imgSrc: "images/compressed-gifs/spyder.gif",
      color: "#835792",
      url: "https://github.com/hyungwlee/hyel-spyder"
    },
    {
      id: "dower",
      name: "Dower Tefense",
      desc: "Just another good 'ole tower defense game, except YOU are the attacker!",
      langs: ["cplusplus", "sdl"],
      imgSrc: "images/compressed-gifs/dower.gif",
      color: "#44623A",
      url: rafaGhLink("cpp-sdl-td")
    },
    {
      id: "lucina",
      name: "Lucina",
      desc: "First-person 3D horror game where you escape a hyper-intelligent, AI-powered entity.",
      langs: ["unity", "csharp"],
      imgSrc: "images/compressed-gifs/lucina.gif",
      color: "#8D7755",
      teamSize: 4,
      url: "https://github.com/ryanengphoto/lucina"
    },
    {
      id: "glassdoor",
      name: "Glassdoor Mockup",
      desc: "Mockup of Glassdoor's front page as a design/ideation exercise.",
      langs: ["typescript", "react", "tailwindcss", "vite"],
      imgSrc: "images/glassdoor.png",
      color: "#0F121C",
      url: rafaGhLink("glassdoor-mockup")
    },
    {
      id: "chip",
      name: "Chippy",
      desc: "An emulator for the original CHIP-8 VM.",
      langs: ["cplusplus", "sdl"],
      imgSrc: "images/compressed-gifs/chip8.gif",
      color: "black",
      url: rafaGhLink("cpp-chip8-emu")
    },
    {
      id: "mysh",
      name: "mysh",
      desc: "A UNIX-style shell built for Linux.",
      langs: ["c", "linux"],
      imgSrc: "images/compressed-gifs/mysh.gif",
      color: "black",
      url: rafaGhLink("c-mysh")
    },
    {
      id: "skiplist",
      name: "Skip List",
      desc: "An implementation of a skip list in Java.",
      langs: ["java"],
      imgSrc: "images/skiplist.png",
      color: "black",
      url: rafaGhLink("java-skiplist")
    },
  ]

  const projectElements = projects.map((proj) => {
    const langs = proj.langs.map((lang) => {
      return (
        <li className="text-[3rem]">
          <i key={lang} className={`devicon-${lang}-plain`} />
        </li>
      )
    })

    const ProjectLink = () => {
      return (
        <p className="flex items-center justify-center gap-2 font-bold">
          <u>Check it out!</u>
          <span className="text-[1.5rem]">
            <RiShareBoxLine />
          </span>
        </p>
      )
    }

    return (
      <>
        <li key={proj.id} className="bg-black flex flex-col items-center w-full max-w-[300px] rounded-2xl border-[12px] border-black">
          <h3 className="rounded-tl-lg rounded-tr-lg text-[1.25rem] center p-2 box-border w-full break-words text-center" style={{ backgroundColor: proj.color }}>{proj.name}</h3>
          <img
            src={proj.imgSrc}
            alt="Project demo"
            className="w-full aspect-square object-cover mb-4"
          />
          <div className="flex flex-col gap-4">
            <p className="text-center">{proj.desc}</p>
            <ul className="w-full flex flex-row flex-wrap items-center justify-center gap-2">
              {langs}
            </ul>
            <p className="flex items-center justify-center gap-2 text-center font-bold"><IoPeopleSharp />Team Size: {`${proj.teamSize ?? 1}`}</p>
            {proj.url && <ProjectLink />}
          </div>
        </li>
      </>
    )
  })

  return (
    <>
      <h2>My Projects!</h2>
      <ul className="max-w-[100%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
        {projectElements}
      </ul>
    </>
  )
}
