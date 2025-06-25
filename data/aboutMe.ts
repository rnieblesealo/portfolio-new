type AboutMeItem = {
  id: string,
  text: string,
  imgSrc?: string,
  demoSrc?: string
}

const aboutMe: AboutMeItem[] = [
  {
    id: "college",
    text: "I'm Studying CS at UCF!",
    imgSrc: "/images/ucf.png"
  },
  {
    id: "col",
    text: "I'm Colombian and speak both Spanish and English.",
    imgSrc: "/images/colombia.png"
  },
  {
    id: "run",
    text: "I'm a runner! My record is a half-marathon :D",
    imgSrc: "/images/running.png"
  },
  {
    id: "favMovie",
    text: '"Heathers" is my favorite movie :)',
    imgSrc: "/images/heathers.png"
  },
  {
    id: "music",
    text: "Music is my second love. I've been in a couple bands!",
    imgSrc: "/images/guitar.png",
    demoSrc: "/images/compressed-gifs/band.gif"
  },
]

export default aboutMe
