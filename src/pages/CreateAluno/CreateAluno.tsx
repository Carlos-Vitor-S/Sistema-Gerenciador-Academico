import React from "react";

import Input from "../../components/Input/Input";
import CustomButton from "../../components/CustomButton/CustomButton";

import { useForm } from "react-hook-form";
import { Aluno } from "../../interfaces/aluno";
import AlunosService from "../../services/AlunosService";

interface CreateAlunoProps {
  aluno: Aluno | null;
  onCadastroSuccess: () => void;
  onClose: () => void;
  buttonLabel: string;
}

const CreateAluno = ({
  aluno,
  onCadastroSuccess,
  onClose,
  buttonLabel,
}: CreateAlunoProps) => {
  const { register, handleSubmit, reset } = useForm<Aluno>();

  const onSubmit = async (data: Aluno) => {
    try {
      const alunoService = AlunosService();
      if (aluno) {
        const result = await alunoService.editAluno(aluno.id, data);
      } else {
        const result = await alunoService.createAluno(data);
        console.log("Cadastrou os daddos", result);
      }

      reset();
      onCadastroSuccess();
      onClose();
    } catch (error) {
      console.error("Erro ao cadastrar aluno:", error);
    }
  };

  return (
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
      <CustomButton buttonLabel={buttonLabel} type={"submit"} />
    </form>
  );
};

export default CreateAluno;
