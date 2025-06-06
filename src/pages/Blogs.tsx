import { Link } from "react-router-dom"
import articles from "../../data/articles"
import { type ArticleItem } from "../../data/articles"
import BigHeading from "../comps/BigHeading"
import { Tag, Tags } from "../comps/tags"

export default function Blogs() {
  const ArticleContainer = ({ children }: { children?: React.ReactNode }) => {
    return (
      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-[85%] gap-4 justify-center">
        {children}
      </ul>
    )
  }

  const Article = ({ info }: { info: ArticleItem }) => {
    return (
      <li>
        <Link to={`/blogs/view/${info.id}`}
          className="
          h-min-content flex flex-col-reverse sm:flex-row items-start justify-start bg-black rounded-2xl p-3 gap-3 w-min-content shadow-lg shadow-white/10
          transition-shadow duration-200 hover:shadow-xl hover:shadow-white/20
        ">
          <div className="flex flex-col gap-2 flex-grow">
            <Tags align="left">
              {info.tags?.map((tag) => {
                return (
                  <Tag key={`t-${tag}`} text={tag} />
                )
              })}
            </Tags>
            <p className="text-xl font-bold">{info.heading}</p>
            <p className="text-xs">{info.date.toLocaleString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
            <p className="text-sm">{info.hook}</p>
          </div>
          <img src={info.imgSrc} className="w-full h-40 sm:w-40 sm:aspect-square object-cover rounded-md" />
        </Link>
      </li>
    )
  }

  const articleComponents = articles.map((info: ArticleItem) => {
    return (
      <Article key={`${info.id}`} info={info} />
    )
  })

  return (
    <div className="flex flex-col items-center justify-center">
      <BigHeading id="top" text="Blogs" />
      <div className="w-[85%] flex">
        <p className="w-min-content text-2xl font-extrabold mb-5 p-3 pr-4 pt-1 pb-1 bg-black rounded-full">Latest</p>
      </div>
      <ArticleContainer>
        {articleComponents}
      </ArticleContainer>
      <div className="m-10" />
    </div>
  )
}
