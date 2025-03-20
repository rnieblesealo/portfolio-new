export default function BigHeading({ id, text }: { id?: string, text: string }) {
  return (
    <h1 id={id} className="text-7xl font-jersey10 stroked-less font-bold mt-5 mb-10 scroll-mt-20 text-center leading-[50px]">
      {text}
    </h1>
  )
}
