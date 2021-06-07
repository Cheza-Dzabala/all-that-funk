import React, { useState } from "react";
import {
  PauseOutline,
  PlayOutline,
  PlaySkipBackOutline,
  PlaySkipForwardOutline,
} from "react-ionicons";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayerState = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="player justify-between">
      <div className="flex flex-row items-center space-x-4 cursor-pointer mx-2">
        <PlaySkipBackOutline
          color={"#fafafa"}
          title="back"
          height="40px"
          width="40px"
          onClick={() => console.log("back")}
        />
        {isPlaying ? (
          <PauseOutline
            color={"#fafafa"}
            title="pasue"
            height="40px"
            width="40px"
            onClick={() => togglePlayerState()}
          />
        ) : (
          <PlayOutline
            color={"#fafafa"}
            title="pasue"
            height="40px"
            width="40px"
            onClick={() => togglePlayerState()}
          />
        )}
        <PlaySkipForwardOutline
          color={"#fafafa"}
          title="back"
          height="40px"
          width="40px"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center space-x-5">
          <p>Mabilinganya Family</p>
          <p className="text-xs">01:00 / 03:55</p>
        </div>
        <p>Fresh outta Malawi</p>
      </div>
    </div>
  );
};

export default Player;
