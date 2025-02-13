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
      id: "sofieski",
      name: "Sofieski's Wordles",
      desc: "WhatsApp bot frontend",
      langs: ["html5", "css3"],
    }
  ]

  const projectElements = projects.map((proj) => {
    const langs = proj.langs.map((lang) => {
      return (
        <li>
          <i key={lang} className={`devicon-${lang}-plain`} />
        </li>
      )
    })

    return (
      <>
        <div key={proj.id}>
          <h3>{proj.name}</h3>
          <img src={proj.imgSrc} alt="Project demo" />
          <p>{proj.desc}</p>
          <ul>
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
