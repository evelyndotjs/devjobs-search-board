import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./globalStyles";
import { ContextProvider } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ContextProvider>
    <GlobalStyle />
    <App />
  </ContextProvider>
);
