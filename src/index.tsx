// import { StrictMode } from "react";
// import * as ReactDOMClient from "react-dom/client";
// import { render } from "react-dom";
import reactDom from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
// const root = ReactDOMClient.createRoot(rootElement);

reactDom.render(<App />, rootElement);
