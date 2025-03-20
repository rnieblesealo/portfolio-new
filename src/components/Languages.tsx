import clsx from "clsx"
import langs from "../../data/langs"

export default function Languages() {
  const hoverAnim = clsx(
    "transition-transform duration-[0.25s]",
    "hover:scale-[1.25]",
    "hover:colored",
    "hover:[text-shadow:0px_0px_25px_rgba(255,255,255,0.5)]",
  )

  const langElements = langs.map((lang) => {
    return (
      <li key={lang} className={`devicon-${lang}-plain ${hoverAnim} cursor-pointer`} />
    )
  })

  return (
    <>
      <ul className="w-full max-w-[90%] h-min-content bg-black flex flex-wrap items-center justify-center flex-row text-[3rem] p-6 gap-4 rounded-2xl animate-flip-down">
        {langElements}
      </ul>
    </>
  )
}
