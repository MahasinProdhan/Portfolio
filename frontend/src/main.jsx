import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />

    {/* 🔔 Global Toast Configuration (Theme Matched) */}
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "linear-gradient(135deg, #7c3aed, #2563eb)", // purple → blue
          color: "#ffffff",
          padding: "14px 18px",
          borderRadius: "14px",
          fontWeight: "500",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        },
        success: {
          iconTheme: {
            primary: "#22c55e", // green check
            secondary: "#ffffff",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444", // red cross
            secondary: "#ffffff",
          },
        },
      }}
    />
  </React.StrictMode>,
);
