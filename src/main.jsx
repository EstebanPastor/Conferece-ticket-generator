import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShowTicketProvider from "./context/ShowTicketProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShowTicketProvider>
      <App />
    </ShowTicketProvider>
  </StrictMode>,
);
