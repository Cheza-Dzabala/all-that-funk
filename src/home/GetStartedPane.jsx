import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import ArtistThumbnail from "./getStartedPane/ArtistThumbnail";

const GetStartedPane = () => {
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <p className="text-2xl md:text-8xl tracking-wider">
          Everything for everyone.
        </p>
        <p className="text-sm tracking-widest">Art at your fingertips.</p>
        <Link to={routes.getStarted} className="self-start button">
          Get Started
        </Link>
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

export default GetStartedPane;
