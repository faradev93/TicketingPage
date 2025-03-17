import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const tick = document.getElementById("TicketRoot");
createRoot(tick).render(<App />);
