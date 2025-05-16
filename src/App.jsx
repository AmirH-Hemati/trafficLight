import { useEffect, useState } from "react";
import "./App.css";
import { greenDuration, redDuration, yellowDuration } from "./lightsTiming";

function App() {
  const [red, setRed] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [green, setGreen] = useState(false);

  function tabe1() {
    let currentTime = 0;

    setRed(true);
    setTimeout(() => {
      setRed(false);
      setYellow(true);
    }, currentTime + redDuration);
    currentTime += redDuration;
    setTimeout(() => {
      setYellow(false);
      setGreen(true);
    }, currentTime + yellowDuration);
    currentTime += yellowDuration;
    setTimeout(() => {
      setGreen(false);
      setYellow(true);
    }, currentTime + greenDuration);
    currentTime += greenDuration;
    setTimeout(() => {
      setYellow(false);
      tabe1();
    }, currentTime + yellowDuration);
  }

  useEffect(function () {
    tabe1();
  }, []);

  return (
    <div className="container">
      <h1>این پیام تستی است </h1>
      <div className="traffic-lights shape">
        <div className="shadow"></div>

        <div className={red == true ? "lightred2" : "lightred1"}> </div>
        <div className={yellow == true ? "lightyellow2" : "lightyellow1"}>
          {" "}
        </div>

        <div className={green == true ? "lightgreen2" : "lightgreen1"}> </div>
      </div>
    </div>
  );
}

export default App;
