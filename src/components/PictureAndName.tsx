export default function PictureAndName() {
  return (
    <div className="flex flex-col items-center justify-center space-y-[-70px] mb-[40px]">
      <img
        src="images/profile.jpg"
        alt="My picture"
        className="w-[275px] border-[20px] border-black box-border"
      />
      <h1 className="w-[50%] flex items-center justify-center text-center leading-[3.9rem]">Rafael Niebles</h1>
    </div>
  )
}
