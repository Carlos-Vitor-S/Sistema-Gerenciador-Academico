import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, InputAdornment, styled, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Aluno } from "../../interfaces/aluno";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import { useEffect } from "react";
import AlunosService from "../../services/AlunosService";
import css from "./CreateContratos.module.css";

export default function CreateContratos() {
  const [alunosData, setAlunosData] = React.useState<Aluno[]>([]);
  const [selectedAluno, setSelectedAluno] = React.useState<Aluno | null>(null);
  const [inputValue, setInputValue] = React.useState("");

  // Fetch alunos from the API
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

  const handleAlunoSelect = (event: any, newValue: string | null) => {
    if (newValue) {
      const aluno = alunosData.find((a) => `${a.id} - ${a.nome}` === newValue);
      setSelectedAluno(aluno || null);
    }
  };

  const ConfirmButton = styled(Button)({
    backgroundColor: "var(--primaryColor)",
    borderRadius: "0.4rem",
    padding: "0.7rem",
    width: "100%",
    maxWidth: "20rem",
    textTransform: "none",
    color: "var(--fontColorLight)",
    fontSize: "1rem",

    "&:hover": {
      backgroundColor: "var(--primaryColorHover)",
      transition: "0.2s ease-out",
    },
  });

  const CustomSubtitle = styled(Typography)({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "0.5rem",
  });

  const CustomCard = styled(Card)({
    maxWidth: "45rem",
    width: "100%",
    borderRadius: "0.6rem",
  });

  const ContentItem = styled(Typography)({
    color: "var(--fontColor)",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "0.3rem",
    marginBottom: "0.2rem",
  });

  return (
    <div className={css.container}>
      <CustomCard>
        <CardHeader
          title="Adesão Contrato - N0001"
          className={css.cardHeader}
        />

        <CardContent>
          <Stack spacing={2} sx={{ width: 300, marginBottom: "1rem" }}>
            <Autocomplete
              freeSolo
              disableClearable={true}
              clearOnEscape={true}
              options={alunosData.map((aluno) => `${aluno.id} - ${aluno.nome}`)} // Exemplo de alunos
              onChange={handleAlunoSelect}
              value={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Adicionar Aluno"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Stack>
        </CardContent>

        <Divider variant="middle" />

        <CardContent>
          <CustomSubtitle gutterBottom variant="h5">
            Informações do Contratante
          </CustomSubtitle>
          {selectedAluno ? (
            <>
              <ContentItem variant="body1">
                Nome : {selectedAluno.nome}
              </ContentItem>
              <ContentItem variant="body1">
                CPF : {selectedAluno.cpf}
              </ContentItem>
            </>
          ) : (
            <>
              <ContentItem variant="body1">Nome : Nome do Aluno</ContentItem>
              <ContentItem variant="body1">CPF : 000.000.000-00</ContentItem>
            </>
          )}
        </CardContent>

        <Divider variant="middle" />

        <CardContent>
          <CustomSubtitle gutterBottom variant="h5">
            Informações do Contratado
          </CustomSubtitle>
          <ContentItem
            variant="body1"
            sx={{
              color: "var(--fontColor)",
              fontWeight: "500",
              fontSize: "1.1rem",
              marginBottom: "0.5rem",
            }}
          >
            Universidade Unit
          </ContentItem>
          <ContentItem variant="body1">
            <LocationOnOutlinedIcon fontSize="medium" />
            Av. Murilo Dantas, 300 - Farolândia, Aracaju - SE, 49032-490
          </ContentItem>
          <ContentItem variant="body1">
            <PhoneInTalkOutlinedIcon fontSize="medium" />
            (79) 99999-9999
          </ContentItem>
          <ContentItem variant="body1">
            <EmailOutlinedIcon fontSize="medium" />
            universidadeUnit@email.com
          </ContentItem>
        </CardContent>

        <Divider variant="middle" />

        <CardContent>
          <CustomSubtitle gutterBottom variant="h5">
            Clausulas
          </CustomSubtitle>
          <ContentItem variant="body1" sx={{ textAlign: "justify" }}>
            O presente contrato tem como OBJETO, a prestação, pela CONTRATADA,
            de serviços educacionais, a serem realizados na Escola (xxx),
            localizada na Rua (xxx), nº (xxx), bairro (xxx), Cep (xxx), Cidade
            (xxx), no Estado (xxx), para o ano letivo de (xxx), em favor de
            (xxx) (Nome do Aluno), representado neste instrumento pelo
            CONTRATANTE.
          </ContentItem>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <ConfirmButton variant="contained">Confirmar</ConfirmButton>
        </CardActions>
      </CustomCard>
    </div>
  );
}
