import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css"
import App from "./App";
import { BrowserRouter as Route } from "react-router-dom";
import { AppProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Route>
        <App />
      </Route>
    </AppProvider>
  </React.StrictMode>
);
