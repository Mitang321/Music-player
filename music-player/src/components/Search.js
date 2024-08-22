import React, { useState } from "react";
import { searchTracks, getTrackUrl } from "../services/spotifyService";
import "./Search.css";

function Search({ onSelectTrack }) {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);

  const handleSearch = async () => {
    const results = await searchTracks(query);
    setTracks(results);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for tracks..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <span>
              {track.name} by {track.artists[0].name}
            </span>
            <button onClick={() => onSelectTrack(getTrackUrl(track.id))}>
              Play
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
