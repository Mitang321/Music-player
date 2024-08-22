import React, { useState } from "react";
import { Howl } from "howler";
import Search from "./Search";
import "./Player.css";

function Player() {
  const [sound, setSound] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [trackName, setTrackName] = useState("");

  const playSound = () => {
    if (sound) {
      sound.play();
      setPlaying(true);
    }
  };

  const pauseSound = () => {
    if (sound) {
      sound.pause();
      setPlaying(false);
    }
  };

  const stopSound = () => {
    if (sound) {
      sound.stop();
      setPlaying(false);
    }
  };

  const loadSound = (url) => {
    const newSound = new Howl({ src: [url] });
    setSound(newSound);
    setTrackName(url.split("/").pop().replace(".mp3", ""));
  };

  return (
    <div className="player">
      <Search onSelectTrack={loadSound} />
      <h2 className="track-name">{trackName || "No track loaded"}</h2>
      <div className="controls">
        <button
          className="control-btn"
          onClick={playSound}
          disabled={!sound || playing}
        >
          Play
        </button>
        <button
          className="control-btn"
          onClick={pauseSound}
          disabled={!sound || !playing}
        >
          Pause
        </button>
        <button className="control-btn" onClick={stopSound} disabled={!sound}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default Player;
