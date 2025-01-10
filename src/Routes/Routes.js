import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import { UserLayout } from "../Layouts/UserLayout";
import { Landing } from "../Views/User/Landing";
import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { path: "/", element: <Landing /> },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
export default router;
