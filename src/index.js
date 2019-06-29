import React from "react";
import ReactDOM from "react-dom";
import CheckboxWithLabel from "./CheckboxWithLabel";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <CheckboxWithLabel labelOn="开" labelOff="关" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
