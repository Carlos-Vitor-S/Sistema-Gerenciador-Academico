import React, { useEffect, useState } from "react";
import css from "./Alunos.module.css";
import Card from "../../components/Card/Card";
import { Aluno } from "../../interfaces/aluno";
import AlunosService from "../../services/AlunosService";
import HeaderActions from "../../components/HeaderActions/HeaderActions";

const Alunos = () => {
  const [alunosData, setAlunosData] = useState<Aluno[]>([]);
  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const service = AlunosService();
        const data = await service.getAlunos();
        setAlunosData(data);
        console.log("Dados Backend", data);
      } catch (error) {
        console.error("Erro ao buscar alunos:", error);
      }
    };
    fetchAlunos();
  }, []);
  return (
    <div className={css.container}>
      <div style={{ padding: "0.8rem" }}>
        <HeaderActions label={"Cadastrar Aluno"} />
      </div>
      <div className={css.gridContainer}>
        {alunosData.map((item) => (
          <div className={css.gridColumn} key={item.id}>
            <Card array={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alunos;
