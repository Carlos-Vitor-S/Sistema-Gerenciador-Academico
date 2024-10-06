import React from "react";

import Input from "../../components/Input/Input";
import CustomButton from "../../components/CustomButton/CustomButton";
import FormContainer from "../../components/FormContainer/FormContainer";
import { useForm } from "react-hook-form";
import { Aluno } from "../../interfaces/aluno";
const CreateAluno = () => {
  const { register, handleSubmit, reset } = useForm<Aluno>();

  function onSubmit(data: Aluno) {
    console.log(data);
    reset();
  }

  return (
    <FormContainer formTitle="Cadastro de Aluno">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Nome" register={register} name="nome" />
        <Input label="Cpf" register={register} name="cpf" />
        <Input label="Email" register={register} name="email" />
        <Input label="Telefone" register={register} name="telefone" />
        <CustomButton buttonLabel="Cadastrar Aluno" type={"submit"} />
      </form>
    </FormContainer>
  );
};

export default CreateAluno;
