import React from "react";
import NavBar from "../shared/NavBar";
import Player from "../shared/Player";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="body">
      <NavBar />
      {children}
      <Player />
    </div>
  );
};

export default Layout;
