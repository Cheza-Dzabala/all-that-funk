import React from "react";
import { Route } from "react-router-dom";
import Layout from "./Layout";

const Wrapper = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export default Wrapper;
