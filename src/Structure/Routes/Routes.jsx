// import React from 'react';


import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import About from "../Components/About/About";
import Contacts from "../Components/Contacts/Contacts";
import Experience from "../Components/Experience/Experience";

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
        },
        {
          path: "/skills",
          element: <Skills></Skills>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contacts",
          element:<Contacts></Contacts>
        },
        {
          path: "/experience",
          element:<Experience></Experience>
        }
      ]
    },
  ]);

export default router;