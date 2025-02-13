import clsx from "clsx"

export default function Projects() {
  type ProjectsItem = {
    id: string,
    name: string,
    desc: string,
    langs: string[],
    imgSrc?: string,
    color?: string
  }

  const projects: ProjectsItem[] = [
    {
      id: "micro",
      name: "Microtransistor",
      desc: "First-person FPS",
      langs: ["unity", "csharp"],
      imgSrc: "images/microtransistor.gif",
      color: "red"
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

    return (
      <>
        <div key={proj.id} className="bg-black p-5 flex flex-col items-center gap-4 max-w-[270px]">
          <h3 className="text-[1.5rem] p-2 box-border w-full break-words text-center" style={{ backgroundColor: proj.color }}>{proj.name}</h3>
          <img
            src={proj.imgSrc}
            alt="Project demo"
            className="w-full aspect-square object-cover"
          />
          <p>{proj.desc}</p>
          <ul className="flex flex-row gap-2">
            {langs}
          </ul>
        </div>
      </>
    )
  })

  return (
    <>
      <h2>My Projects!</h2>
      {projectElements}
    </>
  )
}
