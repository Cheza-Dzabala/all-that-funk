import React from "react";
import GetStarted from "./GetStarted";
import LatestNews from "./LatestNews";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-1/2 px-2">
        <GetStarted />
      </div>
      <div className="w-1/2">
        <LatestNews />
      </div>
    </div>
  );
};

export default Home;
