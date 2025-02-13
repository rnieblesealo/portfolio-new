export default function AboutMe() {
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

  const aboutMeElements = aboutMe.map((about, index) => {
    const rot = `rotateZ(${index % 2 === 0 ? 3 : -1}deg)`
    const offset = `translateX(${index % 2 === 0 ? 20 : -70}px)`

    const appliedTransforms = `${rot} ${offset}`

    return (
      <li
        key={about.id}
        className={`flex items-center`}
        style={{ transform: appliedTransforms }}
      >
        <img
          src={about.imgSrc}
          alt="About me illustration"
          className="bg-black p-4 border-box w-[150px]"
        />
        <p className="bg-black p-4 font-bold max-w-[400px]">{about.text}</p>
      </li>
    )
  })

  return (
    <>
      <h2 className="mb-7">About Me :]</h2>
      <ul className="flex flex-col gap-10">
        {aboutMeElements}
      </ul>
    </>
  )
}
