import { createRoot } from "react-dom/client";
import './tailwind.css';
import Frameworklist from "./Frameworklist";
import FrameworklistSearchFilter from "./FrameworklistSearchFilter";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <FrameworklistSearchFilter/>
        </div>
    )
