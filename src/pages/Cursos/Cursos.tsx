import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import courseImage2 from "../../assets/design.jpg";
import CardImage from "../../components/CardImage/CardImage";
import CustomForm from "../../components/CustomForm/CustomForm";
import CustomSnackBar from "../../components/CustomSnackBar/CustomSnackBar";
import FormModal from "../../components/FormModal/FormModal";
import HeaderActions from "../../components/HeaderActions/HeaderActions";
import { Curso } from "../../interfaces/curso";
import CursosService from "../../services/CursoService";
import { FormModalContext } from "../../store/FormModalContextProvider";
import { SnackbarContext } from "../../store/SnackBarContextProvider";
import css from "./Cursos.module.css";
const Cursos = () => {
  const inputFields = [
    { label: "Nome", name: "nome" },
    { label: "Carga Horária", name: "cargaHorario", type: "number" },
    { label: "Pré-Requisitos", name: "PreRequisitos" },
    { label: "Descrição", name: "descricao" },
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

  const { reset } = useForm<Curso>();
  const [cursosData, setCursosData] = useState<Curso[]>([]);
  const [cursoEditado, setCursoEditado] = useState<Curso | null>(null);
  //Selecionar todos Cursos e listar
  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const cursoService = CursosService();
        const data = await cursoService.getCursos();
        setCursosData(data);
      } catch (error) {
        console.error("Erro ao buscar Cursos:", error);
      }
    };
    fetchCursos();
  }, []);

  //Remover Curso por id
  function removeCursoById(id: string) {
    try {
      const cursoService = CursosService();
      cursoService.removeCurso(id);
      setCursosData((prev) => prev.filter((curso) => curso.id !== id));
      handleOpenSnackbar();
      setSnackbarMessage("Curso excluído com sucesso!");
    } catch (error) {
      handleOpenSnackbar();
      setSnackbarMessage("Erro ao excluir curso");
    }
  }

  //Atualizar array de Cursos
  const updateGetCursos = async () => {
    try {
      const cursoService = CursosService();
      const data = await cursoService.getCursos();
      setCursosData(data);
      handleOpenSnackbar();
      setSnackbarMessage(
        cursoEditado
          ? "Curso atualizado com sucesso!"
          : "Curso cadastrado com sucesso!"
      );
    } catch (error) {
      console.error("Erro ao buscar cursos:", error);
    }
  };

  //Funções para abrir e fechar o modal do form
  const handleFormOpenModal = (curso?: Curso) => {
    setCursoEditado(curso || null);
    handleOpenModal();
  };

  const handleFormCloseModal = () => {
    handleCloseModal();
    setCursoEditado(null);
  };

  //Registrar Form Curso
  const onSubmit = async (data: Curso) => {
    try {
      const cursoService = CursosService();
      if (cursoEditado) {
        const result = await cursoService.editCurso(cursoEditado.id, data);
        console.log("Editou os dados", result);
      } else {
        const result = await cursoService.createCurso(data);
        console.log("Cadastrou os dados", result);
      }

      reset();
      updateGetCursos();
      handleFormCloseModal();
    } catch (error) {
      console.error("Erro ao cadastrar Curso:", error);
    }
  };

  return (
    <div className={css.container}>
      <CustomSnackBar
        open={isSnackBarOpen}
        message={snackbarMessage}
        onClose={handleCloseSnackbar}
      />
      <FormModal title={cursoEditado ? "Editar Curso" : "Cadastrar Curso"}>
        <CustomForm
          buttonLabel={cursoEditado ? "Editar Curso" : "Cadastrar Curso"}
          defaultValues={cursoEditado ? cursoEditado : {}}
          inputFields={inputFields}
          onSubmit={onSubmit}
        />
      </FormModal>
      <div style={{ marginBottom: "2rem" }}>
        <HeaderActions
          label={"Cadastrar Curso"}
          onClickShowForm={() => handleFormOpenModal()}
        />
      </div>
      <div className={css.content}>
        {cursosData.map((item) => (
          <CardImage
            key={item.id}
            arrayData={item}
            image={courseImage2}
            onClickRemove={() => removeCursoById(item.id)}
            onClickEdit={() => handleFormOpenModal(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cursos;
