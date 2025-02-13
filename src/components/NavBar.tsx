export default function NavBar() {
  return (
    <nav className="bg-black flex items-center p-2">
      <div className="flex w-full items-center flex-row gap-3">
        <img
          src="images/icon.png"
          alt="Small icon of me"
          className="w-full max-w-[50px]"
        />
        <p className="font-tiny5">Rafael Niebles</p>
      </div>
      <ul className="text-[1rem] font-bold flex flex-row items-center ml-auto gap-4 h-min-content">
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
      </ul>
    </nav>
  )
}
