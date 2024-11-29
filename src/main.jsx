//livestream:symmetrical-octo-carnival

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Root from "./routes/root.jsx";

import Livestream from "./routes/livestream.jsx";
import Index from "./routes/index.jsx";
import ErrorPage from "./error-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Navigate replace to="/" />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          { path: "/livestream", element: <Livestream /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
