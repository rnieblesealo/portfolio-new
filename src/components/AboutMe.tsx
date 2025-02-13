export default function AboutMe() {
  type AboutMeItem = {
    id: string,
    text: string,
    imgSrc?: string
  }

  const aboutMe: AboutMeItem[] = [
    {
      id: "exp1",
      text: "I love this, I love that, and I love you!",
    },
    {
      id: "exp2",
      text: "I love this, I love that, and I love you!",
    }
  ]

  const aboutMeElements = aboutMe.map((about) => {
    return (
      <div key={about.id}>
        <img src={about.imgSrc} alt="About me illustration" />
        <p>{about.text}</p>
      </div>
    )
  })

  return (
    <>
      <h2>About Me</h2>
      {aboutMeElements}
    </>
  )
}
