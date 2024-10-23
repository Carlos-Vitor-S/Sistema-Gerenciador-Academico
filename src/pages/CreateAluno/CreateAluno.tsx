import React, { useEffect } from "react";

import Input from "../../components/Input/Input";
import CustomButton from "../../components/CustomButton/CustomButton";
import FormContainer from "../../components/FormContainer/FormContainer";
import { useForm } from "react-hook-form";
import { Aluno } from "../../interfaces/aluno";
import AlunosService from "../../services/AlunosService";

const CreateAluno = () => {
  const { register, handleSubmit, reset } = useForm<Aluno>();
  const alunoService = AlunosService();
  const onSubmit = async (data: Aluno) => {
    try {
      const result = await alunoService.createAluno(data);
      reset();
    } catch (error) {
      console.error("Erro ao cadastrar aluno:", error);
    }
  };

  return (
    <FormContainer formTitle="Cadastro de Aluno">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Nome" register={register} name="nome" />
        <Input label="Cpf" register={register} name="cpf" />
        <Input label="Email" register={register} name="email" />
        <Input label="Telefone" register={register} name="telefone" />
        <Input label="Cep" register={register} name="cep" />
        <Input label="Uf" register={register} name="uf" />
        <Input label="Cidade" register={register} name="cidade" />
        <Input label="Logradouro" register={register} name="logradouro" />
        <Input label="Bairro" register={register} name="bairro" />
        <Input label="Numero" register={register} name="numero" type="number" />
        <Input label="Complemento" register={register} name="complemento" />
        <CustomButton buttonLabel="Cadastrar Aluno" type={"submit"} />
      </form>
    </FormContainer>
  );
};

export default CreateAluno;
