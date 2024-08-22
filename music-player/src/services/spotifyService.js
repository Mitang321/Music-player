import axios from "axios";

const SPOTIFY_API_URL = "https://api.spotify.com/v1";
const ACCESS_TOKEN = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN;

export const searchTracks = async (query) => {
  try {
    const response = await axios.get(`${SPOTIFY_API_URL}/search`, {
      params: {
        q: query,
        type: "track",
        limit: 10,
      },
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data.tracks.items;
  } catch (error) {
    console.error("Error fetching tracks:", error);
    return [];
  }
};

export const getTrackUrl = (trackId) => {
  return `https://p.scdn.co/mp3-preview/${trackId}`;
};
