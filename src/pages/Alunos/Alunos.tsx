import { useContext, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import CustomSnackBar from "../../components/CustomSnackBar/CustomSnackBar";
import FormModal from "../../components/FormModal/FormModal";
import HeaderActions from "../../components/HeaderActions/HeaderActions";
import Paginator from "../../components/Paginator/Paginator";
import { Aluno } from "../../interfaces/aluno";
import AlunosService from "../../services/AlunosService";
import css from "./Alunos.module.css";

import { useForm } from "react-hook-form";
import CustomForm from "../../components/CustomForm/CustomForm";
import { FormModalContext } from "../../store/FormModalContextProvider";
import { SnackbarContext } from "../../store/SnackBarContextProvider";

export default function Alunos() {
  const { reset } = useForm<Aluno>();
  const inputFields = [
    { label: "Nome", name: "nome" },
    { label: "CPF", name: "cpf" },
    { label: "Email", name: "email" },
    { label: "Telefone", name: "telefone" },
    { label: "CEP", name: "endereco.cep" },
    { label: "UF", name: "endereco.uf" },
    { label: "Cidade", name: "endereco.cidade" },
    { label: "Logradouro", name: "endereco.logradouro" },
    { label: "Bairro", name: "endereco.bairro" },
    { label: "Número", name: "endereco.numero", type: "number" },
    { label: "Complemento", name: "endereco.complemento" },
  ];

  //Contexts
  const { handleCloseModal, handleOpenModal } = useContext(FormModalContext);
  const {
    handleCloseSnackbar,
    handleOpenSnackbar,
    setSnackbarMessage,
    snackbarMessage,
    isSnackBarOpen,
  } = useContext(SnackbarContext);

  //States
  const [alunosData, setAlunosData] = useState<Aluno[]>([]);
  const [alunoEditado, setAlunoEditado] = useState<Aluno | null>(null);

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

  //Remover aluno por id
  function onClickRemoveAluno(id: string) {
    try {
      const alunosService = AlunosService();
      alunosService.removeAluno(id);
      setAlunosData((prev) => prev.filter((aluno) => aluno.id !== id));
      handleOpenSnackbar();
      setSnackbarMessage("Aluno excluído com sucesso!");
    } catch (error) {
      handleOpenSnackbar();
      setSnackbarMessage("Erro ao excluir aluno");
    }
  }

  //Funções para abrir e fechar o modal do form
  const handleFormOpenModal = (aluno?: Aluno) => {
    setAlunoEditado(aluno || null);
    handleOpenModal();
  };

  const handleFormCloseModal = () => {
    handleCloseModal();
    setAlunoEditado(null);
  };

  //Atualizar array de Alunos
  const atualizarGetAlunos = async () => {
    try {
      const alunosService = AlunosService();
      const data = await alunosService.getAlunos();
      setAlunosData(data);
      handleOpenSnackbar();
      setSnackbarMessage(
        alunoEditado
          ? "Aluno atualizado com sucesso!"
          : "Aluno cadastrado com sucesso!"
      );
    } catch (error) {
      console.error("Erro ao buscar alunos:", error);
    }
  };

  //Registrar Form Alunos
  const onSubmit = async (data: Aluno) => {
    try {
      const alunoService = AlunosService();
      if (alunoEditado) {
        const result = await alunoService.editAluno(alunoEditado.id, data);
        console.log("Editou os daddos", result);
      } else {
        const result = await alunoService.createAluno(data);
        console.log("Cadastrou os daddos", result);
      }

      reset();
      atualizarGetAlunos();
      handleFormCloseModal();
    } catch (error) {
      console.error("Erro ao cadastrar aluno:", error);
    }
  };

  return (
    <div className={css.container}>
      <CustomSnackBar
        open={isSnackBarOpen}
        message={snackbarMessage}
        onClose={handleCloseSnackbar}
      />
      <FormModal title={alunoEditado ? "Editar Aluno" : "Cadastrar Aluno"}>
        <CustomForm
          buttonLabel={alunoEditado ? "Editar Aluno" : "Cadastrar Aluno"}
          defaultValues={alunoEditado ? alunoEditado : {}}
          inputFields={inputFields}
          onSubmit={onSubmit}
        />
      </FormModal>

      <div style={{ padding: "0.8rem", width: "100%" }}>
        <HeaderActions
          label={"Cadastrar Aluno"}
          onClickShowForm={() => handleFormOpenModal()}
        />
      </div>
      <div className={css.gridContainer}>
        {alunosData.map((item) => (
          <div className={css.gridColumn} key={item.id}>
            <Card
              array={item}
              onClickRemove={() => onClickRemoveAluno(item.id)}
              onClickEdit={() => handleFormOpenModal(item)}
            />
          </div>
        ))}
      </div>
      <footer>
        <Paginator />
      </footer>
    </div>
  );
}
