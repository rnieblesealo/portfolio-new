export default function Experience() {
  type ExperienceItem = {
    id: string,
    location: string,
    role: string,
    desc: string,
    bulletsTitle?: string,
    bullets?: string[],
    startDate: Date,
    endDate?: Date,
    imgSrc?: string
  }

  const experiences: ExperienceItem[] = [
    {
      id: "yomama",
      location: "Yo mama house",
      role: "Yo mama pounder",
      desc: "Pounded yo mama",
      startDate: new Date()
    }
  ]

  const experienceElements = experiences.map((exp) => {
    const bullets = exp.bullets?.map((bullet) => {
      return (
        <li key={`${bullet}`}>{bullet}</li>
      )
    })

    return (
      <>
        <div key={exp.id}>
          <img src={exp.imgSrc} alt="Location logo" />
          <span>{`${exp.startDate.toLocaleString()} - ${exp.endDate?.toLocaleString()}`}</span>
        </div>
        <div>
          <h4>{exp.location}</h4>
          <h5>{exp.role}</h5>
          <p>{exp.desc}</p>
          <h5>{exp.bulletsTitle}</h5>
          <ul>
            {bullets}
          </ul>
        </div>
      </>
    )
  })

  return (
    <>
      <h2>My Projects!</h2>
      {experienceElements}
    </>
  )
}
