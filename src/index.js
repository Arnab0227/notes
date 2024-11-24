import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { NotesProvider } from "./context/notes-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <NotesProvider>
      <App />
    </NotesProvider>
  </BrowserRouter>
);
