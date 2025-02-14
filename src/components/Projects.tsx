import { IoPeopleSharp } from "react-icons/io5";
import { RiShareBoxLine } from "react-icons/ri";
import projects from "../../data/projects"

export default function Projects() {
  const projectElements = projects.map((proj) => {
    const langs = proj.langs.map((lang) => {
      return (
        <li className="text-[3rem]">
          <i key={lang} className={`devicon-${lang}-plain`} />
        </li>
      )
    })

    const projectLink = (
      <p className="flex items-center justify-center gap-2 font-bold">
        <u>Check it out!</u>
        <span className="text-[1.5rem]">
          <RiShareBoxLine />
        </span>
      </p>
    )

    const teamSize = (
      <p className="flex items-center justify-center gap-2 text-center font-bold"><IoPeopleSharp />Team Size: {`${proj.teamSize ?? 1}`}</p>
    )

    const tagElements = proj.tags?.map((tag) => {
      return (
        <p className="text-[0.75rem] font-bold bg-gray-800 rounded-2xl text-white p-1 pl-3 pr-3">{tag}</p>
      )
    })

    const tagCollection = (
      <div className="flex flex-row flex-wrap items-center justify-center gap-1 mt-2 mb-2">
        {tagElements}
      </div>
    )

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
            {proj.teamSize && teamSize}
            {proj.url && projectLink}
            {proj.tags && tagCollection}
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
