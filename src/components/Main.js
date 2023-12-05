import * as React from "react";
import ButtonAppBar from "./AppHeader.js";
import { ChartBar } from "./ChartBar.js";

function Main() {
  return (
    <div className="main">
      <ButtonAppBar />
      <ChartBar />
    </div>
  );
}

export default Main;
