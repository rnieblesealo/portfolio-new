import PageContextProvider from "../components/PageContextProvider"
import { Link } from "react-router-dom"
import articles from "../../data/articles"
import { type ArticleItem } from "../../data/articles"
import BigHeading from "../comps/BigHeading"

export default function Blogs() {
  const HeroArticle = ({ info }: { info: ArticleItem }) => {
    return (
      <div className="flex flex-col gap-2 items-left p-4 bg-black rounded-2xl mb-5 w-full">
        <div className="flex justify-center">
          <img src={info.imgSrc} className=" aspect-square object-cover" />
        </div>
        <p className="text-lg font-bold">{info.heading}</p>
        <p className="text-sm">{info.hook}</p>
      </div>
    )
  }

  const ArticleContainer = ({ children }: { children?: React.ReactNode }) => {
    return (
      <ul className="flex flex-col w-[85%] justify-center items-center">
        {children}
      </ul>
    )
  }

  const Article = ({ info }: { info: ArticleItem }) => {
    return (
      <Link to={`/blogs/view/${info.ref}`}
        className="h-40 flex items-start justify-start bg-black rounded-2xl p-3 gap-3 mb-5 w-full">
        <div className="flex flex-col gap-2 flex-grow">
          <p className="text-xl font-bold">{info.heading}</p>
          <p className="text-sm">{info.hook}</p>
        </div>
        <img src={info.imgSrc} className="aspect-square h-full object-cover" />
      </Link>
    )
  }

  const articleComponents = articles.map((info: ArticleItem, index: number) => {
    // latest article is hero
    if (index === 0) {
      return (
        <HeroArticle info={info} />
      )

    }

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
