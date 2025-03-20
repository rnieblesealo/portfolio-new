import PageContextProvider from "../components/PageContextProvider"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { IoArrowBack } from "react-icons/io5";

export default function ViewBlog() {
  const { markdownRef } = useParams()
  const [markdownContent, setMarkdownContent] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    import(`/articles/${markdownRef}.md`)
      .then((module) => fetch(module.default))
      .then((result) => result.text())
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.log("Error loading markdown article: ", error))
  }, [markdownRef])

  return (
    <PageContextProvider theme="solid">
      <div className="all:unset prose prose-invert bg-gray-900 min-w-[90vw] h-full p-5">
        <button onClick={() => { navigate(-1) }} className="flex items-center">
          <IoArrowBack /> Back
        </button>
        <Markdown remarkPlugins={[remarkGfm]}>
          {markdownContent}
        </Markdown>
      </div>

    </PageContextProvider>
  )
}
