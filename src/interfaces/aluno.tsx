export interface Aluno {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  endereco: {
    cep: string;
    uf: string;
    cidade: string;
    logradouro: string;
    bairro: string;
    numero: number;
    complemento?: string;
  };
}
