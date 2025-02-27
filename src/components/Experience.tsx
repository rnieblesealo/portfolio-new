import clsx from "clsx"
import { experiences, ExperienceItem } from "../../data/experiences.ts"

export default function Experience() {
  // sort experiences from latest to earliest by start date
  function sortExperiences(a: ExperienceItem, b: ExperienceItem) {
    if (a.startDate > b.startDate) {
      return -1
    } else if (a.startDate < b.startDate) {
      return 1
    }

    return 0;
  }

  const experienceElements = experiences.sort(sortExperiences).map((exp: ExperienceItem) => {
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
      <li key={exp.id} className="bg-black p-4 flex flex-row gap-4 justify-leftgap-5 rounded-2xl w-full animate-fade-right">
        <div className="flex flex-col items-center max-w-[80px] gap-4">
          <img
            src={exp.imgSrc}
            alt="Location logo"
            className="min-w-[80px]"
          />
          <span className="text-center">{`${start}`} - <span className={`${italicizePresent}`}>{end}</span></span>
        </div>
        <div className="flex flex-col gap-3">
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
      <h2 id="exp">My Experience!</h2>
      <ul className="flex flex-col gap-4 max-w-[90%]">
        {experienceElements}
      </ul>
    </>
  )
}
