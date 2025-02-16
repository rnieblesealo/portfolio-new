import clsx from "clsx"
import aboutMe from "../../data/aboutMe"
import { useEffect, useState } from "react"
import { getLastFmTopArtists, searchSpotify } from "../scripts/lastfm.ts"

interface TopArtistProps {
  imgSrc: string,
  name: string
}

function TopArtist({ imgSrc, name }: TopArtistProps) {
  return (
    <div>
      <img
        src={imgSrc}
        alt={`Artist pic of ${name}`}
      />
      <p>{name}</p>
    </div>
  )
}

function TopArtists() {
  const [topArtists, setTopArtists] = useState<any>(null)

  useEffect(() => {
    // get top artists from lastfm
    getLastFmTopArtists()
      .then(async (lastFmResponse) => {
        console.log("LastFM: ", lastFmResponse)

        // grab name of each top artist and query spotify for its image
        const topArtists = await Promise.all(
          lastFmResponse.map(async (artistInfo) => {
            const artistName = artistInfo.name
            let artistImage = null

            try {
              const spotifyArtistData = await searchSpotify(artistName)
              artistImage = spotifyArtistData.images[0].url
            } catch (error) {
              console.error("Could not get Spotify image: ", error)
            }

            return {
              name: artistName,
              imgUrl: artistImage
            }
          }))

        const components = topArtists.map((info) => {
          console.log(info.imgUrl)

          return (
            <div className="bg-black p-5 flex items-center flex-col justify-center rounded-2xl gap-2">
              <img
                src={info.imgUrl}
                alt={`Artist pic of ${info.name}`}
                className="max-w-[200px] rounded-lg"
              />
              <p className="font-bold">{info.name}</p>
            </div>
          )
        })

        setTopArtists(components)

      })
  }, [])

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {topArtists}
    </div>
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
      <TopArtists />
      <ul className="flex flex-col flex-wrap items-center justify-center max-w-[75%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%]">
        {aboutMeElements}
      </ul>
    </>
  )
}
