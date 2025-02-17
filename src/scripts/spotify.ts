import axios from "axios"

type SpotifyImageInfo = {
  url: string
}

type SpotifyArtistInfo = {
  images: SpotifyImageInfo[]
}

type SpotifyArtistSearchResponse = {
  data: {
    artists: {
      items: SpotifyArtistInfo[]
    }
  }
}

type SpotifyTokenResponse = {
  data: {
    access_token: string
  }
}

async function getSpotifyAccessToken() {
  const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET

  // encode client id, secret
  const auth = btoa(`${clientID}:${clientSecret}`)

  try {
    // use axios to send post request to spotify at endpoint /api/token
    const response: SpotifyTokenResponse = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: "client_credentials"
      }),
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )

    // grab access token from response
    return response.data.access_token
  } catch (error) {
    // do this if any error occurs
    console.error("Error fetching access token: ", error)
    return null;
  }
}

export async function searchSpotify(artistName: string) {
  // get access token to spotify
  const accessToken = await getSpotifyAccessToken()
  if (!accessToken) {
    return null
  }

  // console.log("Got access token: ", accessToken)

  try {
    const spotifySearchUrl = "https://api.spotify.com/v1/search"

    const params = new URLSearchParams({
      q: `artist:${artistName}`, // the query
      type: "artist" // the type of thing we're looking for
    })

    const headers = {
      "Authorization": `Bearer ${accessToken}`
    }

    const response: SpotifyArtistSearchResponse = await axios.get(spotifySearchUrl, { params, headers })

    // we want best match so grab first one lol
    return response.data.artists.items[0]
  } catch (error) {
    console.error("Error querying Spotify: ", error)
  }
}
