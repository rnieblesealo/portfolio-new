export default function Languages() {
  const langs: string[] = [
    "typescript",
    "javascript",
    "html5",
    "css3",
    "python",
    "java",
    "swift",
    "c",
    "cpp",
    "csharp",
    "postgresql"
  ]

  // NOTE: we need to give some key to generated lists!
  // -------------------------------------------------------------------------------------------------
  // the point of keys is identification by react's dom
  // primary example is re-renders (react reconciliation)
  // if we can identify keys uniquely, we can track its changes and update ONLY that elem. when needed
  // if not, the entire list needs to be re-rendered
  // this is why we can't use nanoid too; the keys must be unique and persist across re-renders!

  const langElements = langs.map((lang) => {
    return (
      <i key={lang} className={`devicon-${lang}-plain`} />
    )
  })

  return (
    <>
      {langElements}
    </>
  )
}
