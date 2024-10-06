import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Layout from "./layout";
import CreateAluno from "./pages/CreateAluno/CreateAluno";
import Alunos from "./pages/Alunos/Alunos";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/create-aluno",
        element: <CreateAluno />,
      },
      {
        path: "/alunos",
        element: <Alunos />,
      },
    ],
  },
]);

export default routes;
