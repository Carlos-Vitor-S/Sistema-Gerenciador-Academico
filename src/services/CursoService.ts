import axios from "axios";

import { Curso } from "../interfaces/curso";

export default function CursosService() {
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  });

  const createCurso = async (curso: Curso) => {
    try {
      const response = await api.post("/curso", curso);
      return response.data;
    } catch (error) {
      console.log("Erro de post", error);
      throw error;
    }
  };

  const getCursos = async () => {
    try {
      const response = await api.get("/curso");
      console.log(response.status);
      return response.data;
    } catch (error) {
      console.log("Erro de Get", error);
      throw error;
    }
  };

  const removeCurso = async (id: string) => {
    try {
      const response = await api.delete(`/curso/${id}`);
      return response.data;
    } catch (error) {
      console.log("Erro de delete", error);
      throw error;
    }
  };

  const editCurso = async (id: string, curso: Curso) => {
    try {
      const response = await api.put(`/curso/${id}`, curso);
      return response.data;
    } catch (error) {
      console.log("Erro de Edit", error);
      throw error;
    }
  };

  return { createCurso, getCursos, removeCurso, editCurso };
}
