import { IoPeopleSharp } from "react-icons/io5";
import { RiShareBoxLine } from "react-icons/ri";
import projects from "../../data/projects"
import { useState } from "react";

interface ProjectProps {
  id: string,
  name: string,
  desc: string,
  imgSrc?: string,
  color?: string,
  langs: React.ReactNode,
  teamSize: React.ReactNode,
  ctLink: React.ReactNode,
  tagCollection: React.ReactNode
}

// we don't instantiate in the .map because we need to use state for hover effect
function Project({ id, name, desc, imgSrc, color, langs, teamSize, ctLink, tagCollection }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false)

  const styles = {
    transition: "box-shadow 0.25s ease, transform 0.25s ease",
  }

  return (
    <li
      key={id}
      className="bg-black flex flex-col items-center w-full max-w-[300px] rounded-2xl border-[12px] border-black cursor-pointer"
      onMouseEnter={() => { setIsHovered(true) }}
      onMouseLeave={() => { setIsHovered(false) }}
      style={{
        ...styles, // append predefined styles
        ...(isHovered ? { boxShadow: `0px 0px 50px ${color}`, transform: "scale(105%)" } : {})
      }}
    >
      <h3 className="rounded-tl-lg rounded-tr-lg text-[1.25rem] center p-2 box-border w-full break-words text-center" style={{ backgroundColor: color }}>{name}</h3>
      <img
        src={imgSrc}
        alt="Project demo"
        className="w-full aspect-square object-cover mb-4"
      />
      <div className="flex flex-col gap-4">
        <p className="text-center">{desc}</p>
        <ul className="w-full flex flex-row flex-wrap items-center justify-center gap-2">
          {langs}
        </ul>
        {teamSize}
        {ctLink}
        {tagCollection}
      </div>
    </li >
  )
}

export default function Projects() {
  const projectElements = projects.map((proj) => {
    const langs = proj.langs.map((lang) => {
      return (
        <li key={lang} className="text-[2.5rem]">
          <i className={`devicon-${lang}-plain`} />
        </li>
      )
    })

    const projectLink = (
      <a href={proj.url} className="flex items-center justify-center gap-2 font-bold text-hoverable" target="_blank">
        <p className="text-center">Check it out!</p>
        <span className="text-[1.5rem]">
          <RiShareBoxLine />
        </span>
      </a>
    )

    const teamSize = (
      <p className="flex items-center justify-center gap-2 text-center font-bold"><IoPeopleSharp />Team Size: {`${proj.teamSize ?? 1}`}</p>
    )

    const tagElements = proj.tags?.map((tag) => {
      return (
        <li key={tag} className="cursor-pointer text-[0.75rem] font-bold transition-bg duration-[0.1s] bg-gray-800 hover:bg-gray-900 rounded-2xl text-white p-1 pl-3 pr-3 text-center">{tag}</li>
      )
    })

    const tagCollection = (
      <ul className="flex flex-row flex-wrap items-center justify-center gap-1 mt-2 mb-2">
        {tagElements}
      </ul>
    )

    return (
      <Project
        id={proj.id}
        name={proj.name}
        desc={proj.desc}
        imgSrc={proj.imgSrc}
        color={proj.color}
        langs={langs}
        teamSize={teamSize}
        ctLink={projectLink}
        tagCollection={tagCollection}
      />
    )
  })

  return (
    <>
      <h2 id="proj">My Projects!</h2>
      < ul className="max-w-[100%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2" >
        {projectElements}
      </ul >
    </>
  )
}
