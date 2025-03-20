export function Tags({ children, align }: { children?: React.ReactNode, align?: "left" | "right" | "center" }) {
  const alignStyle =
    align === "left" && "justify-start" ||
    align === "center" && "justify-center" ||
    align === "right" && "justify-end" ||
    !align && "justify-center"

  return (
    <ul className={`flex flex-row flex-wrap gap-1 ${alignStyle}`}>
      {children}
    </ul>
  )
}

export function Tag({ text }: { text: string }) {
  return (
    <li key={`tag-${text}`} className="cursor-pointer text-xs font-bold transition-bg duration-[0.1s] bg-gray-800 hover:bg-gray-900 rounded-2xl text-white p-1 pl-3 pr-3 text-center">
      {text}
    </li>
  )
}
