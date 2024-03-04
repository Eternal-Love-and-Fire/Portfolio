import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home/ui";
import { About } from "./about/ui";
import { Works } from "./works/ui";
import { Contacs } from "./contacs/ui";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/works",
        element: <Works />
    },
    {
        path: "/contacs",
        element: <Contacs />
    }
])