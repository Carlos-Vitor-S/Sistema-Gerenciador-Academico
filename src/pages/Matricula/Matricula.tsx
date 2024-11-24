import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import courseImage from "../../assets/design.jpg";
import InfoDisplayCard from "../../components/InfoDisplayCard/InfoDisplayCard";
import { Aluno } from "../../interfaces/aluno";
import AlunosService from "../../services/AlunosService";
import css from "./Matricula.module.css";

export default function Matricula() {
  const [alunosData, setAlunosData] = useState<Aluno[]>([]);
  //Selecionar todos alunos e listar
  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const alunosService = AlunosService();
        const data = await alunosService.getAlunos();
        setAlunosData(data);
      } catch (error) {
        console.error("Erro ao buscar alunos:", error);
      }
    };
    fetchAlunos();
  }, []);

  const location = useLocation();
  const course = location.state?.course;

  return (
    <div className={css.container}>
      <div className={css.imageContainer}>
        <img src={courseImage} alt="Course Design" />
      </div>
      <InfoDisplayCard
        curso={course}
        alunos={alunosData}
        cardTitle="Informações"
      />
    </div>
  );
}
