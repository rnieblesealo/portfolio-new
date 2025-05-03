import clsx from "clsx"
import langs from "../../data/langs"

export default function Languages() {

  // NOTE: we need to give some key to generated lists!
  // -------------------------------------------------------------------------------------------------
  // the point of keys is identification by react's dom
  // primary example is re-renders (react reconciliation)
  // if we can identify keys uniquely, we can track its changes and update ONLY that elem. when needed
  // if not, the entire list needs to be re-rendered
  // this is why we can't use nanoid too; the keys must be unique and persist across re-renders!

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
    <ul className="w-full max-w-150 h-min-content bg-black flex flex-wrap items-center justify-center flex-row text-[3rem] p-6 gap-4 rounded-2xl animate-flip-down">
      {langElements}
    </ul>
  )
}
