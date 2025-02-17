import clsx from "clsx"
import aboutMe from "../../data/aboutMe"
import { useEffect, useState } from "react"
import { getLastFmTopArtists, searchSpotify } from "../scripts/lastfm.ts"
import { FaLastfmSquare, FaSpotify } from "react-icons/fa"

function TopArtists() {
  const [topArtists, setTopArtists] = useState<any>(null)

  useEffect(() => {
    // get top artists from lastfm
    getLastFmTopArtists()
      .then(async (lastFmResponse) => {
        console.log("LastFM: ", lastFmResponse)

        // grab name of each top artist and query spotify for its image
        const topArtists = await Promise.all(
          lastFmResponse.map(async (artistInfo: any) => {
            const artistName = artistInfo.name
            const artistPlayCount = artistInfo.playcount
            let artistImage = null

            try {
              const spotifyArtistData = await searchSpotify(artistName)
              artistImage = spotifyArtistData.images[1].url
            } catch (error) {
              console.error("Could not get Spotify image: ", error)
            }

            return {
              name: artistName,
              playCount: artistPlayCount,
              imgUrl: artistImage
            }
          }))

        const components = topArtists.map((info, index) => {
          return (
            <div className="bg-black p-3 flex items-center flex-col justify-center rounded-2xl gap-1 animate-jump-in">
              <img
                src={info.imgUrl}
                alt={`Artist pic of ${info.name}`}
                className="w-[150px] aspect-square rounded-lg object-cover"
              />
              <p className="font-bold text-center break-words flex flex-col">
                <span className="text-[0.75rem] text-gray-600">#{index + 1}</span>
                {info.name}
              </p>
              <p className="font-bold text-gray-600 text-center text-[0.75rem]">
                {info.playCount} plays
              </p>
            </div >
          )
        })

        setTopArtists(components)

      })
  }, [])

  const placeholder = (
    <p className="flex items-center justify-center font-bold bg-black p-4 rounded-2xl w-full">Fetching...</p>
  )

  const topArtistsGrid = (
    <div className="grid grid-cols-3 auto-rows gap-1">
      {topArtists}
    </div>
  )

  return (
    <div className="rounded-2xl mt-3 mb-3 max-w-[100%] sm:max-w-[90%] lg:max-w-[75%] flex items-center justify-center flex-col">
      <h3 className="mb-[-10px] w-full flex justify-start stroked-less text-red-500 font-tiny5 font-bold rounded-2xl p-3 text-center">Rafa's on repeat...</h3>
      {topArtists
        ? topArtistsGrid
        : placeholder
      }
      <p className="p-2 flex flex-row items-center justify-end gap-2 font-bold text-left text-[0.75rem] text-gray-100 w-full rounded-2xl">Powered by
        <span className="text-[1.4rem]"><FaSpotify /></span> and
        <span className="text-[1.4rem]"><FaLastfmSquare /></span>
      </p>
    </div >
  )
}

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
      <div className="flex flex-col items-center justify-center max-w-[75%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%]">
        <ul>
          {aboutMeElements}
        </ul>
        <TopArtists />
      </div>
    </>
  )
}
