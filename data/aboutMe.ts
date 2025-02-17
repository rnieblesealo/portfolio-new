type AboutMeItem = {
  id: string,
  text: string,
  imgSrc?: string,
  demoSrc?: string
}

const aboutMe: AboutMeItem[] = [
  {
    id: "college",
    text: "I'm going for a B.S. in Computer Science and a minor in math at UCF!",
    imgSrc: "/images/ucf.png"
  },
  {
    id: "col",
    text: "I'm colombian, and speak both Spanish and English!",
    imgSrc: "/images/colombia.png"
  },
  {
    id: "run",
    text: "I love running! I ran my first half-marathon a bit ago :]",
    imgSrc: "/images/running.png"
  },
  {
    id: "favMovie",
    text: "My favorite movie is Heathers.",
    imgSrc: "/images/heathers.png"
  },
  {
    id: "music",
    text: "Music is my second passion! I've been in a couple of small bands in Orlando.",
    imgSrc: "/images/guitar.png",
    demoSrc: "/images/compressed-gifs/band.gif"
  },
]

export default aboutMe
