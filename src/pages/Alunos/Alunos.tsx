import React, { useEffect, useState } from "react";
import css from "./Alunos.module.css";
import Card from "../../components/Card/Card";
import { Aluno } from "../../interfaces/aluno";
import AlunosService from "../../services/AlunosService";
import HeaderActions from "../../components/HeaderActions/HeaderActions";
import CustomSnackBar from "../../components/CustomSnackBar/CustomSnackBar";
import Paginator from "../../components/Paginator/Paginator";
import FormModal from "../../components/FormModal/FormModal";
import CreateAluno from "../CreateAluno/CreateAluno";

const Alunos = () => {
  //Serviço de Aluno
  const alunosService = AlunosService();

  //States
  const [alunosData, setAlunosData] = useState<Aluno[]>([]);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  //Selecionar todos alunos e listar
  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const data = await alunosService.getAlunos();
        setAlunosData(data);
      } catch (error) {
        console.error("Erro ao buscar alunos:", error);
      }
    };
    fetchAlunos();
  }, [alunosService]);

  //Remover aluno por id
  function onClickRemoveAluno(id: string) {
    try {
      alunosService.removeAluno(id);
      setAlunosData((prev) => prev.filter((aluno) => aluno.id !== id));
      setOpenSnackbar(true);
      setSnackbarMessage("Aluno excluído com sucesso!");
    } catch (error) {
      setSnackbarMessage("Erro ao excluir aluno");
      setOpenSnackbar(true);
    }
  }

  //Função para fechar Snackbar
  function handleCloseSnackBar() {
    setOpenSnackbar(false);
  }
  //Funções para abrir e fechar o modal do form
  const handleFormOpenModal = () => setOpenModal(true);
  const handleFormCloseModal = () => setOpenModal(false);

  //Atualizar array de Alunos
  const atualizarGetAlunos = async () => {
    try {
      const data = await alunosService.getAlunos();
      setAlunosData(data);
      setOpenSnackbar(true);
      setSnackbarMessage("Aluno cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao buscar alunos:", error);
    }
  };

  return (
    <div className={css.container}>
      <CustomSnackBar
        open={openSnackbar}
        message={snackbarMessage}
        onClose={handleCloseSnackBar}
      />
      <FormModal
        open={openModal}
        onClose={handleFormCloseModal}
        title="Cadastro de Aluno"
      >
        <CreateAluno
          onCadastroSuccess={atualizarGetAlunos}
          onClose={handleFormCloseModal}
        />
      </FormModal>

      <div style={{ padding: "0.8rem" }}>
        <HeaderActions
          label={"Cadastrar Aluno"}
          onClickShowForm={handleFormOpenModal}
        />
      </div>
      <div className={css.gridContainer}>
        {alunosData.map((item) => (
          <div className={css.gridColumn} key={item.id}>
            <Card
              array={item}
              onClickRemove={() => onClickRemoveAluno(item.id)}
            />
          </div>
        ))}
      </div>
      <footer>
        <Paginator />
      </footer>
    </div>
  );
};

export default Alunos;
