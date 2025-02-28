import React from "react";
import ReactDOM from "react-dom/client";
import CombinedFlowchartPage from "./pages/CombinedFlowchartPage";
import "./index.css"; // Ensure your styles are loaded
import BoxFlow from "./pages/StoryPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BoxFlow />
  </React.StrictMode>
);
