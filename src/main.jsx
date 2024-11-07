import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import './index.css'
import { Analytics } from "@vercel/analytics/react
import { SpeedInsights } from "@vercel/speed-insights/react"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
  <SpeedInsights/>
  <Analytics/>
  <RouterProvider router={router} />
  </>
);