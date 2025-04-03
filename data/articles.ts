export type ArticleItem = {
  id: string,
  heading: string,
  hook: string
  imgSrc: string,
  date: Date,
  tags?: string[]
}

const articles: ArticleItem[] = [
  {
    id: "prof-dev",
    heading: "Why You Suck at Programming (And Why That's OK!)",
    hook: "Breaking into SWE might seem impossible right now, but what if I told you it's just a matter of perspective? Adapted from my 4/1 workshop w/KnightHacks on Professional Development.",
    imgSrc: "/article-covers/prof-dev.png",
    date: new Date("April 1 2025"),
    tags: [
      "Professional Development",
      "Early Career",
      "Workshop"
    ]
  },
]

export default articles; 
