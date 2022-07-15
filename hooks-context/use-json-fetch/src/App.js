import React from "react";
import Data from "./components/Data";
import Error from "./components/Error";
import Loading from "./components/Loading";

export default function App() {
  return (
    <div className="App">
      <Data/>
      <Loading/>
      <Error/>
    </div>
  );
}
