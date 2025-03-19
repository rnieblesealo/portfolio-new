export default function BigHeading({ id, text }: { id?: string, text: string }) {
  return (
    <h1 id={id} className="text-7xl font-jersey10 stroked-less font-bold mb-7 scroll-mt-20">
      {text}
    </h1>
  )
}
