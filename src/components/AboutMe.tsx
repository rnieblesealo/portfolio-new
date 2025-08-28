import clsx from "clsx"
import aboutMe from "../../data/aboutMe"
import { useEffect, useState } from "react"
import { getLastFmTopArtists, LastFmArtistInfo } from "../scripts/lastfm.ts"
import { searchSpotify } from "../scripts/spotify.ts"
import { FaLastfmSquare, FaSpotify, FaMusic } from "react-icons/fa"

import BigHeading from "../comps/BigHeading.tsx"

// TODO: rewrite this to make more logical
function TopArtists() {
  const [topArtists, setTopArtists] = useState<React.ReactNode[] | null>(null)

  useEffect(() => {
    // get top artists from lastfm
    getLastFmTopArtists()
      .then(async (lastFmResponse) => {
        // console.log("LastFM: ", lastFmResponse)

        // need to check is not null or else typescript complains
        if (!lastFmResponse) {
          console.error("Invalid LastFM response")
          return;
        }

        // grab name of each top artist and query spotify for its image
        const topArtists: LastFmArtistInfo[] = await Promise.all(

          lastFmResponse.map(async (artistInfo: LastFmArtistInfo) => {
            const artistName = artistInfo.name
            const artistPlayCount = artistInfo.playcount
            let artistImage: string | undefined

            // search spotify for lastfm artist by name to get its image
            try {
              const spotifyArtistData = await searchSpotify(artistName)

              // give back struct with image if found
              if (spotifyArtistData) {
                artistImage = spotifyArtistData.images[1].url

                return {
                  name: artistName,
                  playcount: artistPlayCount,
                  imgUrl: artistImage
                }
              }

            } catch (error) {
              console.error("Could not get Spotify image: ", error)
            }

            return {
              name: artistName,
              playcount: artistPlayCount,
              imgUrl: artistImage
            }

          }))

        const components = topArtists.map((info: LastFmArtistInfo, index: number) => {
          return (
            <div
              key={index}
              className="bg-black p-3 flex items-center flex-col justify-top rounded-2xl gap-1 animate-jump-in">
              <img
                src={info.imgUrl}
                alt={`Artist pic of ${info.name}`}
                className="w-[150px] aspect-square rounded-lg object-cover"
              />
              <p className="font-bold text-center flex flex-col text-[0.8rem] break-all">
                <span className="font-normal text-[0.75rem] text-gray-600">#{index + 1}</span>
                {info.name}
              </p>
              <p className="text-gray-600 text-center text-[0.75rem]">
                {info.playcount} plays
              </p>
            </div >
          )
        })

        setTopArtists(components)

      })
      .catch((error) => {
        console.log("Unable to generate artist info: ", error)
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
      <h3 className="flex items-center justify-center gap-2 self-start text-[1.2rem] mb-1 w-min-content text-red-500 bg-black font-bold font-jersey10 rounded-2xl p-1 pl-4 pr-4">Rafa's on repeat... <FaMusic /></h3>
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
      about.demoSrc && "animate-fade animate-infinite animate-duration-[2000ms] animate-ease-in-out animate-alternate-reverse animate-fill-both",
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
        <p className="text-sm sm:text-lg ml-[-3px] bg-black p-4 font-bold h-full max-h-[140px] overflow-y-auto rounded-tr-2xl rounded-br-2xl animate-flip-down z-2">{about.text}</p>
      </li>
    )
  })

  return (
    <div className="flex flex-col items-center justify-center">
      <BigHeading id="abt" text="About Me :)" />
      <div className="flex flex-col items-center justify-center w-70 sm:w-120">
        <ul>
          {aboutMeElements}
        </ul>
        <TopArtists />
      </div>
    </div>
  )
}
