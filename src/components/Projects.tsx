import { IoPeopleSharp } from "react-icons/io5";
import { RiShareBoxLine } from "react-icons/ri";
import { FaMedal } from "react-icons/fa6";
import { CgAsterisk } from "react-icons/cg";
import projects from "../../data/projects"
import { Link, To } from "react-router-dom"
import { useState } from "react";
import { cva } from "class-variance-authority"
import BigHeading from "../comps/BigHeading.tsx"

// NOTE: this is kind of useless now because i changed my mind on the codepath styling
// but leaving it because it might be useful in the future
const projectContent = cva(
  // default classes
  "flex flex-col items-center w-full h-full overflow-hidden rounded-lg cursor-pointer",
  {
    // variant categories
    variants: {
      variant: {
        normal: "bg-gradient-to-b from-gray-700 to-black",
        codepath: "bg-gradient-to-b from-blue-900 to-black",
        bitcamp: "bg-gradient-to-b from-orange-900 to-black"
      }
    },
    // sets default variants
    defaultVariants: {
      variant: "normal"
    }
  }
)

const projectHeading = cva(
  "text-xl text-white p-2 box-border break-all text-center flex flex-wrap items-center justify-center gap-2 font-extrabold w-full",
  {
    variants: {
      variant: {
        normal: "bg-none",
        codepath: "bg-gradient-to-r from-[#18626c] via-[#19305d] to-[#31235b]",
        bitcamp: "bg-gradient-to-r from-[#ff6b2c] via-[#ff4e2a] to-[#cc2b2b]",
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
  variant: "normal" | "codepath" | "bitcamp"
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
      <IoPeopleSharp /> Team Size: {`${teamSize ?? 1}`}
    </p>

  const tagElements = tags?.map((tag) => {
    const tagColor = "bg-gray-900"

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
    <p className="font-normal text-white text-center mb-4 flex items-center justify-center px-3 py-2 rounded-full flex-col sm:flex-row w-full text-xs">
      Built for
      <span
        className="ml-1 text-white flex items-center w-min font-extrabold">
        CODEPATH
        <span className="flex items-center text-emerald-600">
          <CgAsterisk className="mx-[-4px]" />ORG
        </span>
      </span>
    </p>

  const bitcamp2025Winner =
    <p className="font-extrabold text-center mb-4 flex items-center justify-center px-3 py-2 rounded-full flex-col sm:flex-row w-full text-xs border-1 border-amber-500 text-amber-500">
      <FaMedal className="mr-1 text-sm" />Bitcamp 2025 Winner!
    </p>

  const infoContent =
    <div className="w-full h-min flex flex-col p-5">
      {variant === "codepath" && builtForCodepath}
      {variant === "bitcamp" && name === "Riffs" && bitcamp2025Winner}
      <p className="text-center">{desc}</p>
      <ul className="w-full flex flex-row flex-wrap items-center justify-center gap-2 my-4">
        {langElements}
      </ul>
      {teamSize && teamSizeElement}
      {tagCollection}
    </div>

  const gradientOverlay = false;

  return (
    // Enclosing link
    <Link to={url as To} target="_blank" className="w-full h-full">
      {/* Outer container to add padding */}
      <li
        onMouseEnter={() => { setIsHovered(true) }}
        onMouseLeave={() => { setIsHovered(false) }}
        className="bg-black p-3 rounded-2xl w-full h-full"
        style={{
          transition: "box-shadow 0.25s ease, transform 0.25s ease",
          ...(isHovered ? { boxShadow: `0px 0px 50px ${hoverColor}`, transform: "scale(105%)" } : {})
        }}>

        {/* Inner container for info */}
        <div
          className={projectContent({ variant: variant })}>
          {/* Heading */}
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

          {/* Demo image */}
          <div className="relative w-full aspect-square">
            {/* Overlay gradient for pizzaz, may be too much */}
            {gradientOverlay &&
              <div
                className="absolute w-full h-full z-5"
                style={{
                  background: `linear-gradient(to bottom, transparent 10%, ${color})`,
                  filter: "opacity(70%)"
                }} />
            }
            <img
              src={imgSrc}
              alt="Project demo"
              className="w-full aspect-square object-cover saturate-200"
            />
          </div>

          {infoContent}

        </div>

      </li >
    </Link >
  )
}

export default function Projects() {
  const projectElements = projects.map((proj) => {
    if (proj.hide){
      return null;
    }

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
    <div className="flex flex-col items-center justify-center">
      <BigHeading id="proj" text="My Projects!" />
      <ul className="max-w-80 sm:max-w-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2" >
        {projectElements}
      </ul >
    </div>
  )
}
