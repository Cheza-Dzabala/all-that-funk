import React from "react";
import ArtistThumbnail from "./getStartedPane/ArtistThumbnail";

const GetStarted = () => {
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <p className="text-2xl md:text-8xl tracking-wider">
          Everything for everyone.
        </p>
        <p className="text-sm tracking-widest">Art at your fingertips.</p>
        <button className="self-start button">Get Started</button>
      </div>
      <div className="flex space-x-2 w-full flex-wrap py-2 space-y-5">
        <ArtistThumbnail />
        <ArtistThumbnail />
        <ArtistThumbnail />
        <ArtistThumbnail />
        <ArtistThumbnail />
        <ArtistThumbnail />
        <ArtistThumbnail />
        <ArtistThumbnail />
        <ArtistThumbnail />
        <ArtistThumbnail />
        <ArtistThumbnail />
        <ArtistThumbnail />
        <ArtistThumbnail />
        <ArtistThumbnail />
        <ArtistThumbnail />
        <ArtistThumbnail />
      </div>
    </div>
  );
};

export default GetStarted;
