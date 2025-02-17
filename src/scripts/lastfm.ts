import axios from "axios"

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

    const response = await axios.get("http://ws.audioscrobbler.com/2.0/", { params }) // TODO: why is it written like this?

    // return artist data
    return response.data.topartists.artist
  } catch (error) {
    console.error("Error getting top tracks: ", error)
    return null
  }
}

export async function getMbRelations(mbid: string) {
  try {
    // query music brainz db (intendedly) using lastfm MBID to get artist info
    const musicBrainzBase = "https://musicbrainz.org/ws/2"
    const targetURL = `${musicBrainzBase}/artist/${mbid}`

    const params = new URLSearchParams({
      inc: "aliases+url-rels" // NOTE: include relations! this is misc. metadata that might include images, which we want
    })

    // user agent header info, not partcularly determined by anything 
    const appName = "rnieblesPortfolio"
    const appVer = "1.0"
    const email = "rafaelniebles2003@gmail.com"

    const headers = {
      "User-Agent": `${appName}/${appVer} (${email})` // musicbrainz requires this header
    }

    const response = await axios.get(targetURL, { params, headers })

    // return the relations
    return response.data.relations
  } catch (error) {
    console.error("Error getting MusicBrainz: ", error)
  }
}

// WARN: mb relations are random metadata uploaded by users and aren't guaranteed an image
// an artist as big as nirvana doesn't have one!
// we're going to need a different solution...
// what if we just query the spotify api for the artist name?

async function getSpotifyAccessToken() {
  const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET

  // encode client id, secret
  const auth = btoa(`${clientID}:${clientSecret}`)

  try {
    // use axios to send post request to spotify at endpoint /api/token
    const tokenResponse = await axios.post(
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
    const accessToken = tokenResponse.data.access_token;

    // return it!
    return accessToken;
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

  console.log("Got access token: ", accessToken)

  try {
    const spotifySearchUrl = "https://api.spotify.com/v1/search"

    const params = new URLSearchParams({
      q: `artist:${artistName}`, // the query
      type: "artist" // the type of thing we're looking for
    })

    const headers = {
      "Authorization": `Bearer ${accessToken}`
    }

    const response = await axios.get(spotifySearchUrl, { params, headers })

    // we want best match so grab first one lol
    const firstMatch = response.data.artists.items[0]

    console.log("Got first match: ", firstMatch)

    return firstMatch
  } catch (error) {
    console.error("Error querying Spotify: ", error)
  }
}
