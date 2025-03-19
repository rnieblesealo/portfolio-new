import PageContextProvider from "../components/PageContextProvider"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import { IoArrowBack } from "react-icons/io5";

export default function ViewBlog() {
  const { markdownRef } = useParams()
  const [markdownContent, setMarkdownContent] = useState("")

  useEffect(() => {
    import(`/articles/${markdownRef}.md`)
      .then((module) => fetch(module.default))
      .then((result) => result.text())
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.log("Error loading markdown article: ", error))
  }, [markdownRef])

  return (
    <PageContextProvider>
      <div className="all:unset prose prose-invert bg-gray-900 h-full p-2">
        <Link to="" className="">
          <IoArrowBack/> Back
        </Link>
        <Markdown remarkPlugins={[remarkGfm]}>
          {markdownContent}
        </Markdown>
      </div>

    </PageContextProvider>
  )
}
