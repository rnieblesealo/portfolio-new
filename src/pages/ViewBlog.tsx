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
    fetch(
      `/articles/${markdownRef}.md`
    )
      .then((result) => result.text())
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.log("Error loading markdown article: ", error))
  }, [markdownRef])

  return (
    <div className="w-screen max-w-250 bg-black px-5">
      <button
        onClick={() => { navigate("/blogs") }}
        className="flex items-center text-xl my-3 p-3 border rounded-2xl cursor-pointer">
        <IoArrowBack /> Back
      </button>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          // # headings
          h1: ({ ...props }) => (
            <h1 className="text-3xl font-extrabold my-4" {...props} />
          ),
          // ## headings
          h2: ({ ...props }) => (
            <h1 className="text-2xl font-extrabold my-4" {...props} />
          ),
          // normal blocks of text
          p: ({ ...props }) => (
            <p className="leading-relaxed mb-4 text-gray-300" {...props} />
          ),
          // **bold** 
          strong: ({ ...props }) => (
            <strong className="text-white font-bold" {...props} />
          ),
          // --- horizontal rules 
          hr: ({ ...props }) => (
            <hr className="text-gray-800" {...props} />
          ),
          // images
          img: ({ alt, src, ...props }) => (
            <img
              src={src}
              alt={alt}
              className="max-w-110 block mx-auto my-10 rounded-xl"
              {...props} />
          ),
          // > quotes 
          blockquote: ({ ...props }) => (
            <blockquote className="italic font-bold mx-auto text-center" {...props} />
          ),
        }}>
        {markdownContent}
      </Markdown>
    </div>
  )
}
