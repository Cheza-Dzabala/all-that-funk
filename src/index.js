import React from "react";
import ReactDOM from "react-dom";
import { FirebaseAppProvider } from "reactfire";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import RoutesIndex from "./RoutesIndex";
import { FIREBASE_CONFIG } from "./config";
ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={FIREBASE_CONFIG}>
      <RoutesIndex />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
