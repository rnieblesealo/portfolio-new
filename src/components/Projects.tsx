import { IoPeopleSharp } from "react-icons/io5";
import { RiShareBoxLine } from "react-icons/ri";
import { CgAsterisk } from "react-icons/cg";
import projects from "../../data/projects"
import { useState } from "react";
import { cva } from "class-variance-authority"
import clsx from "clsx"
import BigHeading from "../comps/BigHeading.tsx"

const projectCard = cva(
  // default classes
  "flex flex-col items-center w-full aspect-square rounded-lg cursor-pointer",
  {
    // variant categories
    variants: {
      variant: {
        normal: "bg-black text-white",
        codepath: "bg-gray-200 text-gray-700 font-bold"
      }
    },
    // sets default variants
    defaultVariants: {
      variant: "normal"
    }
  }
)

const projectHeading = cva(
  "text-xl text-white p-2 box-border break-all text-center flex flex-wrap items-center justify-center gap-2 font-extrabold",
  {
    variants: {
      variant: {
        normal: "bg-none",
        codepath: "bg-gradient-to-r from-[#18626c] via-[#19305d] to-[#31235b]"
      }
    },
    defaultVariants: {
      variant: "normal"
    }
  }
)

type ProjectProps = {
  name: string,
  desc: string,
  langs: string[],
  url?: string,
  imgSrc?: string,
  color?: string,
  teamSize?: number,
  tags?: string[],
  variant: "normal" | "codepath"
}

function Project({ name, desc, url, imgSrc, color, langs, teamSize, tags, variant }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false)

  const langElements = langs.map((lang) =>
    <li key={lang} className="text-[2.5rem]">
      <i className={`devicon-${lang}-plain`} />
    </li>
  )

  const teamSizeElement =
    <p
      className="flex items-center justify-center gap-2 text-center font-bold">
      <IoPeopleSharp />Team Size: {`${teamSize ?? 1}`}
    </p>

  const tagElements = tags?.map((tag) => {
    const tagColor = clsx(variant === "codepath" ? "bg-gray-700" : "bg-gray-900")

    return (
      <li
        key={tag}
        className={`${tagColor} cursor-pointer text-[0.75rem] font-bold transition-bg duration-[0.1s] rounded-2xl text-white p-1 pl-3 pr-3 text-center`}>
        {tag}
      </li >
    )
  })

  const tagCollection =
    <ul className="flex flex-row flex-wrap items-center justify-center gap-1 mt-2 mb-2">
      {tagElements}
    </ul>


  const hoverColor = (variant === "codepath" ? "#31235b" : color)

  const builtForCodepath =
    <p className="text-center mb-4 flex items-center justify-center bg-gray-300 px-3 py-2 rounded-full">
      Built for
      <span
        className="ml-1 text-gray-700 flex items-center w-min font-extrabold">
        CODEPATH
        <span className="flex items-center text-emerald-600">
          <CgAsterisk className="mx-[-4px]" />ORG
        </span>
      </span>
    </p>

  const infoContent =
    <div className="flex flex-col p-5">
      {variant === "codepath" && builtForCodepath}
      <p className="text-center">{desc}</p>
      <ul className="w-full flex flex-row flex-wrap items-center justify-center gap-2 my-4">
        {langElements}
      </ul>
      {teamSize && teamSizeElement}
      {tagCollection}
    </div>

  return (
    <li
      className="bg-black p-3 rounded-2xl"
      style={{
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
        ...(isHovered ? { boxShadow: `0px 0px 50px ${hoverColor}`, transform: "scale(105%)" } : {})
      }}>
      <div
        className={projectCard({ variant: variant })}
        onMouseEnter={() => { setIsHovered(true) }}
        onMouseLeave={() => { setIsHovered(false) }}>
        <div className="w-full aspect-square rounded-lg overflow-hidden">
          <h3
            className={projectHeading({ variant: variant })}
            style={{
              // NOTE: must use ... to do boolean style checking
              // ... only spreads truthy keys 
              // if we weren't to include it, we might get something that turns into a "false"
              // that's not a KV pair so the object breaks!
              ...(variant === "normal" ? { backgroundColor: color } : {})
            }}>
            {name}
            <RiShareBoxLine />
          </h3>
          <img
            src={imgSrc}
            alt="Project demo"
            className="w-full aspect-square object-cover"
          />
        </div>
      </div>
    </li >
  )
}

export default function Projects() {
  const projectElements = projects.map((proj) => {
    return (
      <Project
        key={proj.id}
        url={proj.url}
        name={proj.name}
        desc={proj.desc}
        imgSrc={proj.imgSrc}
        color={proj.color}
        langs={proj.langs}
        teamSize={proj.teamSize}
        tags={proj.tags}
        variant={proj.variant}
      />
    )
  })

  return (
    <div>
      <BigHeading id="proj" text="My Projects!" />
      <ul className="max-w-[100%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2" >
        {projectElements}
      </ul >
    </div>
  )
}
