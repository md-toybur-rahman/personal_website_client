// import React from 'react';


import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu";
import Projects from "../Components/Projects/Projects";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path: "/projects",
          element: <Projects></Projects>
        }
      ]
    },
  ]);

export default router;