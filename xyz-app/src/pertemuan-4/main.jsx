import { createRoot } from "react-dom/client";
import './tailwind.css';
import Frameworklist from "./Frameworklist";
import FrameworklistSearchFilter from "./FrameworklistSearchFilter";
import ResponsiveDesign from './ResponsiveDesign';



createRoot(document.getElementById("root"))
    .render(
        <div>
                <ResponsiveDesign />
        </div>
    )
