import PageContextProvider from "../components/PageContextProvider"
import { Tag, Tags } from "../comps/tags"
import { Link } from "react-router-dom"
import articles from "../../data/articles"
import { type ArticleItem } from "../../data/articles"
import BigHeading from "../comps/BigHeading"

export default function Blogs() {
  const HeroArticle = () => {
    return (
      <div className="flex flex-col gap-2 items-left p-4 bg-black rounded-2xl w-[90%]">
        <div className="flex justify-center">
          <img src="/images/chip8.gif" className="aspect-square object-cover" />
        </div>
        <Tags align="left">
          <Tag text="C++" />
          <Tag text="Emu" />
        </Tags>
        <p className="text-lg font-bold">Building a CHIP-8 Emulator in C++</p>
        <p className="text-sm">This is an article about something I am really passionate about I would really like to talk to you about this!</p>
      </div>
    )
  }

  const ArticleContainer = ({ children }: { children?: React.ReactNode }) => {
    return (
      <ul className="flex flex-col gap-3 w-[90%]">
        {children}
      </ul>
    )
  }

  const Article = ({ info }: { info: ArticleItem }) => {
    return (
      <Link to={`/blogs/view/${info.ref}`}
        className="h-40 flex items-start justify-start bg-black rounded-2xl p-3 gap-3">
        <div className="flex flex-col gap-2 flex-grow">
          <p className="text-xl font-bold">{info.heading}</p>
          <p className="text-sm">{info.hook}</p>
        </div>
        <img src="/images/chip8.gif" className="aspect-square h-full" />
      </Link>
    )
  }

  const articleComponents = articles.map((info: ArticleItem) => {
    return (
      <Article info={info} />
    )
  })

  return (
    <PageContextProvider theme="night">
      <BigHeading text="Blogs" />
      <ArticleContainer>
        {articleComponents}
      </ArticleContainer>
    </PageContextProvider >
  )
}
