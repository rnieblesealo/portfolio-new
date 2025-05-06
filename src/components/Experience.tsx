import clsx from "clsx"
import { experiences, ExperienceItem } from "../../data/experiences.ts"
import BigHeading from "../comps/BigHeading.tsx";

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

    return (
      <li
        key={exp.id}
        className="bg-gradient-to-b from-black to-slate-950 px-4 pt-3 pb-6 flex flex-row gap-4 justify-left gap-5 rounded-2xl w-full animate-fade-right relative overflow-hidden">

        <div className="absolute w-full h-[55px] top-0 left-0 z-0">
          <div
            className="w-full h-full z-1"
            style={{
              backgroundColor: exp.accentColor
            }} />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/40" />
        </div>

        <div className="flex flex-col items-center max-w-[80px] gap-4 z-1">
          <img
            src={exp.imgSrc}
            alt="Location logo"
            className="min-w-[80px] rounded-lg shadow shadow-xl shadow-black/70"
          />
          <p className="text-center text-xs">{`${start}`} - <span className={`${italicizePresent}`}>{end}</span></p>
        </div>
        <div className="flex flex-col">
          <h3
            className="w-fit text-2xl font-extrabold z-2"
            style={{
              color: exp.headingColor
            }}>
            {exp.employer}
          </h3>

          <h5 className="text-lg font-bold mt-6">{exp.role}</h5>
          <p className="text-base text-gray-500 mt-1">{exp.location}</p>

          {exp.bulletsTitle &&
            <h5 className="text-base font-bold my-4">{exp.bulletsTitle}</h5>
          }

          {exp.bullets &&
            <ul className="text-base square-ul pl-4 flex flex-col gap-1">
              {bullets}
            </ul>
          }

          <p className="text-sm mt-6">{exp.desc}</p>

        </div>
      </li>
    )
  })

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <BigHeading id="exp" text="My Experience..." />
      <ul className="flex flex-col items-center justify-center gap-3 max-w-[80%]">
        {experienceElements}
      </ul>
    </div>
  )
}
