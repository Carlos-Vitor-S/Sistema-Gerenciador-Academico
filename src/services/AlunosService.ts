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
      console.log(response.status);
      return response.data;
    } catch (error) {
      console.log("Erro de Get", error);
      throw error;
    }
  };

  return { getAlunos, createAluno };
}
