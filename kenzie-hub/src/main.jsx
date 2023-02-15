import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Globalstyles from "./styles/Globalstyles.js";
import Reset from "./styles/Reset.js";
import UserProvider from "./Providers/UserContexts.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <Globalstyles />
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
