import clsx from "clsx"

export default function Experience() {
  type ExperienceItem = {
    id: string,
    location: string,
    role: string,
    desc: string,
    bulletsTitle?: string,
    bullets?: string[],
    startDate: Date,
    endDate?: Date,
    imgSrc?: string
  }

  const experiences: ExperienceItem[] = [
    {
      id: "kh",
      location: "KnightHacks",
      role: "Software Engineer",
      desc: "I wrote some sick ass code for KnightHacks!",
      bulletsTitle: "Some points:",
      bullets: [
        "In HTML",
        "CSS too!",
        "And perhaps even some TypeScript!",
        "I really hate JavaScript..."
      ],
      startDate: new Date(),
      imgSrc: "images/knighthacks.jpg"
    }
  ]

  const experienceElements = experiences.map((exp) => {
    const bullets = exp.bullets?.map((bullet) => {
      return (
        <li key={`${bullet}`}>
          {bullet}
        </li>
      )
    })

    const start = exp.startDate.toLocaleString("en-US", { month: "short", year: "numeric" })
    const end = exp.endDate
      ? exp.endDate.toLocaleString("en-US", { month: "short", year: "numeric" })
      : "Present"

    const italicizePresent = clsx(
      !exp.endDate && "italic"
    )

    return (
      <li key={exp.id} className="bg-black p-4 flex flex-row gap-5">
        <div className="flex flex-col items-center w-full max-w-[100px] gap-4">
          <img
            src={exp.imgSrc}
            alt="Location logo"
          />
          <span className="text-center">{`${start}`} - <span className={`${italicizePresent}`}>{end}</span></span>
        </div>
        <div>
          <h3>{exp.location}</h3>
          <h5>{exp.role}</h5>
          <p>{exp.desc}</p>
          <h5>{exp.bulletsTitle}</h5>
          <ul className="square-ul pl-4">
            {bullets}
          </ul>
        </div>
      </li>
    )
  })

  return (
    <>
      <h2>My Experience!</h2>
      <ul>
        {experienceElements}
      </ul>
    </>
  )
}
