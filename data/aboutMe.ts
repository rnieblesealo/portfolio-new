type AboutMeItem = {
  id: string,
  text: string,
  imgSrc?: string
}

const aboutMe: AboutMeItem[] = [
  {
    id: "college",
    text: "I'm going for a B.S. in Computer Science and a minor in math at UCF!",
    imgSrc: "/images/ucf.png"
  },
  {
    id: "col",
    text: "I'm very fortunate to be a legal permanent resident from Colombia! I speak both Spanish and English.",
    imgSrc: "/images/colombia.png"
  },
  {
    id: "run",
    text: "I love running! I ran my first half-marathon a bit ago :]",
    imgSrc: "/images/running.png"
  },
  {
    id: "music",
    text: "Music is my second passion! Click this widget to check some of my songs out :)",
    imgSrc: "/images/guitar.png"
  },
  {
    id: "favMovie",
    text: "My favorite movie of all time is Heathers.",
    imgSrc: "/images/heathers.png"
  },
]

export default aboutMe
