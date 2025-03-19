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
    id: "blogs",
    text: "Blogs",
    link: "/blogs"
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
    id: "resume",
    text: "Resumé",
    link: "https://drive.google.com/file/d/16Tr9ySJrI1fEz8drh2w6zxu6ADSH9CbD/view",
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
