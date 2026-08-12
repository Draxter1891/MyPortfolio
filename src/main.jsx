import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

createRoot(document.getElementById("root")).render(<AppRoutes />);
