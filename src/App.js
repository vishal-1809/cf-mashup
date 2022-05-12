import "./App.scss";
import Head from "./Header/Header";
import Userid from "./Username/Userid";
import Button from "./Buttons/Button";
import { useState } from "react";
// Got it! (Vishal Yadav Here...)
// https://codepen.io/chrisota/pen/bNdRaM

function App() {
  return (
    <>
      <div className="App">
        <Head />
        <div className="divide">
          <Userid />
        </div>
      </div>
    </>
  );
}

export default App;
