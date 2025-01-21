import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/index.tsx";
import Configurator from "./modules/configurator/index.tsx";
import Tracker from "./modules/tracker/index.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", index: true, element: <Tracker /> },
      { path: "/tracker", element: <Tracker /> },
      { path: "/configurator", element: <Configurator /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
