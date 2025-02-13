export default function AboutMe() {
  type AboutMeItem = {
    id: string,
    text: string,
    imgSrc?: string
  }

  const aboutMe: AboutMeItem[] = [
    {
      id: "exp1",
      text: "I love Heathers!",
      imgSrc: "/images/heathers.png"
    }
  ]

  const aboutMeElements = aboutMe.map((about) => {
    return (
      <li key={about.id} className="flex items-center">
        <img
          src={about.imgSrc}
          alt="About me illustration"
          className="bg-black p-4 border-box w-[150px]"
        />
        <p className="bg-black p-4 font-bold">{about.text}</p>
      </li>
    )
  })

  return (
    <>
      <h2>About Me</h2>
      <ul>
        {aboutMeElements}
      </ul>
    </>
  )
}
