import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import 'regenerator-runtime/runtime'

const App = () => {
  return (
    <React.StrictMode>
    <div>
      <h1 id="something-important">Adopt Me</h1>
      <SearchParams />
    </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
