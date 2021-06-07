import React from "react";

import rina from "../assets/rina.jpeg";

const ArtistThumbnail = () => {
  return (
    <img
      src={rina}
      alt="artist"
      className="rounded-full h-24 w-24 shadow cursor-pointer hover:ring-4 ring-offset-white"
    />
  );
};

export default ArtistThumbnail;
