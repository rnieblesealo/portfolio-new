export type ArticleItem = {
  id: string,
  ref: string,
  heading: string,
  hook: string
  imgSrc: string,
  date: Date,
}

const articles: ArticleItem[] = [
  {
    id: "example",
    ref: "example",
    heading: "An Example Article",
    hook: "This is an example article.",
    imgSrc: "/images/chip8.gif",
    date: new Date("March 19 2025"),
  },
  {
    id: "example1",
    ref: "example",
    heading: "An Example Article",
    hook: "This is an example article.",
    imgSrc: "/images/microtransistor.gif",
    date: new Date("March 19 2025"),
  }
]

export default articles; 
