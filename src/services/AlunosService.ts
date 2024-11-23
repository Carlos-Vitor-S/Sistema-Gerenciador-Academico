import axios from "axios";
import { Aluno } from "../interfaces/aluno";

export default function AlunosService() {
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  });

  const createAluno = async (aluno: Aluno) => {
    try {
      const response = await api.post("/aluno", aluno);
      return response.data;
    } catch (error) {
      console.log("Erro de post", error);
      throw error;
    }
  };

  const getAlunos = async () => {
    try {
      const response = await api.get("/aluno");
      return response.data;
    } catch (error) {
      console.log("Erro de Get", error);
      throw error;
    }
  };

  const removeAluno = async (id: string) => {
    try {
      const response = await api.delete(`/aluno/${id}`);
      return response.data;
    } catch (error) {
      console.log("Erro de delete", error);
      throw error;
    }
  };

  const editAluno = async (id: string, aluno: Aluno) => {
    try {
      const response = await api.put(`/aluno/${id}`, aluno);
      return response.data;
    } catch (error) {
      console.log("Erro de Edit", error);
      throw error;
    }
  };

  return { getAlunos, createAluno, removeAluno, editAluno };
}
