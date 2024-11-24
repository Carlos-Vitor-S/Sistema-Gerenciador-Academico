import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Layout from "./layout";
import Alunos from "./pages/Alunos/Alunos";
import Relatorios from "./pages/Relatorios/Relatorios";
import Cursos from "./pages/Cursos/Cursos";
import Matricula from "./pages/Matricula/Matricula";
import Contratos from "./pages/Contratos/Contratos";
import CreateContratos from "./pages/CreateContratos/CreateContratos";

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
        path: "/alunos",
        element: <Alunos />,
      },
      {
        path: "/cursos",
        element: <Cursos />,
      },
      {
        path: "/contratos",
        element: <Contratos />,
      },
      {
        path: "/createContratos",
        element: <CreateContratos />,
      },
      {
        path: "/relatorios",
        element: <Relatorios />,
      },
      {
        path: "/matricula/:id",
        element: <Matricula />,
      },
    ],
  },
]);

export default routes;
