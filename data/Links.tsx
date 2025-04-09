import React from "react"

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

type LinksItem = {
  id: string,
  text?: string,
  icon?: React.ReactNode
  link: string,
  newTab?: boolean
}

const links: LinksItem[] = [
  {
    id: "intro",
    text: "Intro",
    link: "/#home"
  },
  {
    id: "abt",
    text: "About",
    link: "/#abt"
  },
  {
    id: "proj",
    text: "Projects",
    link: "/#proj"
  },
  {
    id: "exp",
    text: "Experience",
    link: "/#exp"
  },
  {
    id: "blogs",
    text: "Blogs",
    link: "/blogs/#top"
  },
  {
    id: "resume",
    text: "Resumé",
    link: "https://drive.google.com/file/d/1JMhuFU3CLm_kd6HWd9Mt-1Gxd_eGLy9r/view?usp=sharing",
    icon: <IoDocumentText />,
    newTab: true
  },
  {
    id: "github",
    link: "https://github.com/rnieblesealo",
    icon: <FaGithub />,
    newTab: true
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/rafael-niebles/",
    icon: <FaLinkedin />,
    newTab: true
  }
]

export default links
