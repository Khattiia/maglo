import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React  from "react";
import "./util/firebase";
import Overview from "./pages/Overview/Overview";
import Auth from "./pages/Auth/index";
import SignUp from "./pages/Auth/SignUp";
import ForgotPassword from "./pages/Auth/forgotPassword/ForgotPassword";
import Expenses from "./pages/Expenses/Index";
import Goals from "./pages/Goals";
import Settings from "./pages/Settings";
import Security from "./pages/Security";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },

    {
      path: "/overview",
      element: <Overview />,
    },
    {
      path: "/forgotPassword",
      element: <ForgotPassword />,
    },

    {
      path: "/expenses",
      element: <Expenses />,
    },

    {
      path: "/goals",
      element: <Goals />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "/settings/security",
      element: <Security />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
