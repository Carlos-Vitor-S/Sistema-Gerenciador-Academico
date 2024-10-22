import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Layout from "./layout";
import CreateAluno from "./pages/CreateAluno/CreateAluno";
import Alunos from "./pages/Alunos/Alunos";
import Relatorios from "./pages/Relatorios/Relatorios";
import Contratos from "./pages/Contratos/Contratos";
import Cursos from "./pages/Cursos/Cursos";

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
        path: "/relatorios",
        element: <Relatorios />,
      },

      {
        path: "/create-aluno",
        element: <CreateAluno />,
      },
    ],
  },
]);

export default routes;
