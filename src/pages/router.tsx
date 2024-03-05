import { createBrowserRouter } from "react-router-dom";
import { About } from "./about/ui";
import { Works } from "./works/ui/Works";
import { Contacs } from "./contacs/ui";
import { Home } from "./home/ui/Home";
import { Root } from "./root/ui/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/works",
        element: <Works />,
      },
      {
        path: "/contacs",
        element: <Contacs />,
      },
    ],
  },
]);
