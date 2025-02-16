import axios from "axios"

export async function getLastFmTopArtists() {
  try {
    const apiKey = import.meta.env.VITE_LASTFM_API_KEY
    const targetUsername = import.meta.env.VITE_LASTFM_USERNAME

    // TODO: read about url query string
    const params = new URLSearchParams({
      method: "user.gettopartists",
      user: targetUsername,
      api_key: apiKey,
      format: "json"
    })

    const response = await axios.get("http://ws.audioscrobbler.com/2.0/", { params }) // TODO: why is it written like this?
    return response.data.topartists.artist
  } catch (error) {
    console.error("Error getting top tracks: ", error)
    return null
  }
}
