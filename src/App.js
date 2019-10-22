import React from "react";
import ReactDOM from "react-dom";
import BarChartContainer from "./components/BarChartContainer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <BarChartContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
