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
    imgSrc?: string,
    startTitleColor?: string,
    endTitleColor?: string
  }

  const experiences: ExperienceItem[] = [
    {
      id: "hyel",
      location: "HYEL",
      role: "Software Engineer Intern",
      desc: "At HYEL, I had the opportunity to create a complete, production-ready software product, from the design phase all the way to shipping. Check out \"The Spyder\" in the HYEL app/my projects above!",
      bulletsTitle: "Here, I...",
      bullets: [
        "Designed a complete iOS game using Figma",
        "Implemented it using Xcode, UIKit, Swift and SpriteKit",
        "Ensured a consistent 60 FPS and reduced render load by 30% for its production version.",
      ],
      startDate: new Date(),
      imgSrc: "images/hyel.jpg",
      startTitleColor: "white",
      endTitleColor: "#6C00F9"
    },
    {
      id: "kh-lead",
      location: "KnightHacks",
      role: "Project Director",
      desc: "As a team of 5, we'll be designing and implementing Bromodoro, a full-stack app designed to make productivity more social and fun using the genius Pomodoro Technique.",
      bulletsTitle: "While at this, I've done some...",
      bullets: [
        "Developing a modern, responsive (and fun!) frontend using Vite + React.",
        "Leveraging Supabase and its API for our database and deployment needs.",
        "Creating a fun app that'll hopefully get you to do your homework!",
      ],
      startDate: new Date(),
      imgSrc: "images/knighthacks.jpg",
      startTitleColor: "#9969CD",
      endTitleColor: "#131731"
    },
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

    const titleStyle = {
      background: `linear-gradient(to right, ${exp.startTitleColor}, ${exp.endTitleColor})`,
      WebkitBackgroundClip: "text", // For webkit browsers (Chrome, Safari)
      WebkitTextFillColor: "transparent", // Makes the text transparent to show the gradient
    }

    return (
      <li key={exp.id} className="bg-black p-4 flex flex-row gap-5 rounded-lg">
        <div className="flex flex-col items-center w-full max-w-[100px] gap-4">
          <img
            src={exp.imgSrc}
            alt="Location logo"
          />
          <span className="text-center">{`${start}`} - <span className={`${italicizePresent}`}>{end}</span></span>
        </div>
        <div>
          <h3
            className="w-fit"
            style={(exp.startTitleColor && exp.endTitleColor) ? titleStyle : {}}>
            {exp.location}
          </h3>
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
      <ul className="flex flex-col gap-4">
        {experienceElements}
      </ul>
    </>
  )
}
