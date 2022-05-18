import { createRoot } from "react-dom/client";
import App from "./components/App/App";

const container: HTMLElement = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);
