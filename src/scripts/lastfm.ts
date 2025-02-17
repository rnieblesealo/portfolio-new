import axios from "axios"

export type LastFmArtistInfo = {
  name: string,
  playcount: string,
  imgUrl?: string
}

export type LastFmResponse = {
  data: {
    topartists: {
      artist: LastFmArtistInfo[]
    }
  }
}

export async function getLastFmTopArtists() {
  try {
    // call lastfm api to get list of top artists associated to my username
    const apiKey = import.meta.env.VITE_LASTFM_API_KEY
    const targetUsername = import.meta.env.VITE_LASTFM_USERNAME

    // TODO: read about url query string
    const params = new URLSearchParams({
      method: "user.gettopartists",
      user: targetUsername,
      api_key: apiKey,
      limit: "3",
      format: "json"
    })

    const response: LastFmResponse = await axios.get("http://ws.audioscrobbler.com/2.0/", { params }) // TODO: why is it written like this?

    // return artist data
    return response.data.topartists.artist
  } catch (error) {
    console.error("Error getting top tracks: ", error)
    return null
  }
}
