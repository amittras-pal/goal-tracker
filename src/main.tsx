import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";

const Configurator = lazy(() => import("./modules/configurator"));
const Tracker = lazy(() => import("./modules/tracker"));
const IOSync = lazy(() => import("./modules/io"));

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", index: true, element: <Tracker /> },
      { path: "/tracker", element: <Tracker /> },
      { path: "/configurator", element: <Configurator /> },
      { path: "/io", element: <IOSync /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
