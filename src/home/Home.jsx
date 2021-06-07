import React from "react";
import GetStartedPane from "./GetStartedPane";
import LatestNews from "./LatestNews";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-1/2 px-2">
        <GetStartedPane />
      </div>
      <div className="w-1/2">
        <LatestNews />
      </div>
    </div>
  );
};

export default Home;
