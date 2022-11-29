import "./styles.css";
import React from "react";
import { render } from "react-dom";

function Increment() {
  const [numValue, setValue] = React.useState(0);
  const handleChange = () => {
    setValue(numValue + 1);
  };

  return (
    <div className="Increment-btn">
      <p>set value {numValue}</p>
      <button onClick={handleChange}>Increment</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Increment />
      <Increment />
    </div>
  );
}
