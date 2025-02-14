import clsx from "clsx"
import aboutMe from "../../data/aboutMe"

export default function AboutMe() {
  const aboutMeElements = aboutMe.map((about, index) => {
    const evenIndex = index % 2 === 0

    const rot = `rotateZ(${evenIndex ? 3 : -1}deg)`
    const offset = `translateX(${evenIndex ? 20 : -30}px)`
    const appliedTransforms = `${rot} ${offset}`

    const align = `${evenIndex ? "start" : "end"}`

    const demo = (
      <img
        src={about.demoSrc}
        alt="About me sample"
        className="absolute bg-black p-3 border-box h-[150px] rounded-2xl transition-scale duration-[0.3s] hover:scale-[1.15] z-20 cursor-pointer hover:opacity-[0%]"
      />
    )

    const bottomImageStyle = clsx(
      "bg-black p-3 border-box h-[150px] rounded-2xl transition-scale duration-[0.3s] hover:scale-[1.15] z-20 cursor-pointer",
      about.demoSrc && "hover:opacity-[0%]"
    )

    return (
      <li
        key={about.id}
        className="flex items-center"
        style={{ transform: appliedTransforms, alignSelf: align }}
      >
        {about.demoSrc && demo}
        <img
          src={about.imgSrc}
          alt="About me illustration"
          className={bottomImageStyle}
        />
        <p className="ml-[-3px] bg-black p-4 font-bold h-full max-h-[140px] overflow-y-auto rounded-tr-2xl rounded-br-2xl animate-flip-down z-2">{about.text}</p>
      </li>
    )
  })

  return (
    <>
      <h2 id="abt" className="mb-7">About Me :]</h2>
      <ul className="flex flex-col flex-wrap items-center justify-center max-w-[75%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%]">
        {aboutMeElements}
      </ul>
    </>
  )
}
