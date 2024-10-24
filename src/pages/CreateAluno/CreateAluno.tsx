import React from "react";

import Input from "../../components/Input/Input";
import CustomButton from "../../components/CustomButton/CustomButton";
import FormContainer from "../../components/FormContainer/FormContainer";
import { useForm } from "react-hook-form";
import { Aluno } from "../../interfaces/aluno";
import AlunosService from "../../services/AlunosService";

const CreateAluno = () => {
  const { register, handleSubmit, reset } = useForm<Aluno>();

  const onSubmit = async (data: Aluno) => {
    try {
      const alunoService = AlunosService();
      const result = await alunoService.createAluno(data);
      reset();
      console.log("Enviou os daddos", result);
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
        <Input label="Cep" register={register} name="endereco.cep" />
        <Input label="Uf" register={register} name="endereco.uf" />
        <Input label="Cidade" register={register} name="endereco.cidade" />
        <Input
          label="Logradouro"
          register={register}
          name="endereco.logradouro"
        />
        <Input label="Bairro" register={register} name="endereco.bairro" />
        <Input
          label="Numero"
          register={register}
          name="endereco.numero"
          type="number"
        />
        <Input
          label="Complemento"
          register={register}
          name="endereco.complemento"
        />
        <CustomButton buttonLabel="Cadastrar Aluno" type={"submit"} />
      </form>
    </FormContainer>
  );
};

export default CreateAluno;
