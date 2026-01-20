import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Button from "@/components/common/Button"; 

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Button>ㅎㅇ</Button>
  </StrictMode>
);
