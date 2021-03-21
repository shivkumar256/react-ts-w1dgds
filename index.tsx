import React, { Component } from "react";
import { render } from "react-dom";
import BingMap from "./BingMap";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

function App() {
  return (
    <BingMap
      mapOptions={{
        center: [47.60357, -122.32945],
        credentials:
          "ApJA7XsmAsrok-nwOdyQILRZAjsHNu4_GCjn2fhoeo-7q3RG2km1UwBjqPPuEkXd"
      }}
    />
  );
}

render(<App />, document.getElementById("root"));
