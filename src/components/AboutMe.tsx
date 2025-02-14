import aboutMe from "../../data/aboutMe"

export default function AboutMe() {
  const aboutMeElements = aboutMe.map((about, index) => {
    const rot = `rotateZ(${index % 2 === 0 ? 3 : -1}deg)`
    const offset = `translateX(${index % 2 === 0 ? 20 : -30}px)`

    const appliedTransforms = `${rot} ${offset}`

    return (
      <li
        key={about.id}
        className="flex items-center"
        style={{ transform: appliedTransforms }}
      >
        <img
          src={about.imgSrc}
          alt="About me illustration"
          className="bg-black p-3 border-box h-[150px] rounded-2xl"
        />
        <p className="ml-[-3px] bg-black p-4 font-bold h-full max-h-[140px] overflow-y-auto rounded-tr-2xl rounded-br-2xl animate-flip-down">{about.text}</p>
      </li>
    )
  })

  return (
    <>
      <h2 className="mb-7">About Me :]</h2>
      <ul className="flex flex-col flex-wrap items-center justify-center max-w-[75%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%]">
        {aboutMeElements}
      </ul>
    </>
  )
}
