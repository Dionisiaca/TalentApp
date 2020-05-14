import React from "react";
import ReactDOM from "react-dom";
import Router from "./router.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
