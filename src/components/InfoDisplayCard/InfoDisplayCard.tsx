import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import {
  Paper,
  Stack,
  Autocomplete,
  TextField,
  InputAdornment,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Box,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import { Aluno } from "../../interfaces/aluno"; // Certifique-se de que o caminho da interface está correto
import { Curso } from "../../interfaces/curso"; // Certifique-se de que o caminho da interface está correto
import css from "./InfoDisplayCard.module.css";

interface InfoDisplayCardType {
  alunos: Aluno[];
  curso: Curso;
  cardTitle: string;
}

export default function InfoDisplayCard({
  alunos,
  curso,
  cardTitle,
}: InfoDisplayCardType) {
  const ConfirmButton = styled(Button)({
    backgroundColor: "var(--primaryColor)",
    borderRadius: "0.4rem",
    textTransform: "none",
    color: "var(--fontColorLight)",
    "&:hover": {
      backgroundColor: "var(--primaryColorHover)",
      transition: "0.2s ease-out",
    },
  });

  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const [listItems, setListItems] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState("");

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const handleAddItem = (selectedAluno: string) => {
    // Adiciona o aluno apenas se ele ainda não estiver na lista
    if (!listItems.includes(selectedAluno)) {
      setListItems((prev) => [...prev, selectedAluno]);
    }
  };

  const handleDeleteItem = (item: string) => {
    setListItems((prev) => prev.filter((i) => i !== item));
  };

  return (
    <Card sx={{ width: "100%", maxWidth: "40rem", borderRadius: "0.6rem" }}>
      <CardHeader title={cardTitle} className={css.cardHeader} />

      <CardContent>
        <div className={css.subtitleContainer}>
          <Typography variant="h5" component="div">
            {curso.nome}
          </Typography>
          <Paper
            sx={{
              backgroundColor: "var(--primaryColor)",
              color: "var(--fontColorLight)",
              padding: "0.5rem",
              fontWeight: "bold",
              fontSize: "0.9rem",
              borderRadius: "0.5rem",
            }}
          >
            Cod 0{curso.id}
          </Paper>
        </div>

        <Typography variant="body1" sx={{ color: "var(--fontColor)" }}>
          Carga Horária: {curso.cargaHorario} Horas
        </Typography>
        <Typography variant="body1" sx={{ color: "var(--fontColor)" }}>
          Pré-Requisitos: {curso.PreRequisitos}
        </Typography>
        <Typography variant="body1" sx={{ color: "var(--fontColor)" }}>
          {curso.descricao}
        </Typography>
      </CardContent>

      <Divider variant="middle" />

      <CardContent>
        <Typography variant="h5" component="div">
          Informações Matricula
        </Typography>

        <Stack spacing={2} sx={{ width: 300, marginTop: "1rem" }}>
          <Autocomplete
            freeSolo
            id="disable-clearable"
            disableClearable
            clearOnEscape
            options={alunos.map((aluno) => `${aluno.id} - ${aluno.nome}`)}
            onChange={(event, newValue) => {
              if (newValue) {
                handleAddItem(newValue);
              }
            }}
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

        <Box
          sx={{
            width: "100%",
            color: "var(--fontColor)",
            fontWeight: "500",
            overflow: "auto",
            maxHeight: "3.9rem",
          }}
        >
          <List component="nav" aria-label="lista de alunos">
            {listItems.map((item, index) => (
              <ListItemButton
                key={item}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
              >
                {/* ID do aluno (parte da string) */}
                <Typography
                  style={{ textAlign: "left" }}
                  sx={{
                    minWidth: 40,
                    textAlign: "center",
                    color: "var(--fontColor)",
                    fontWeight: 500,
                  }}
                >
                  {item.split(" - ")[0]}
                </Typography>
                {/* Nome do aluno */}
                <ListItemText primary={item.split(" - ")[1]} />{" "}
                {/* Exibe o nome */}
                {/* Ícone de exclusão */}
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteItem(item)} // Remove o item da lista
                >
                  <DeleteIcon sx={{ color: "red" }} fontSize="small" />
                </IconButton>
              </ListItemButton>
            ))}
          </List>
        </Box>
      </CardContent>
      <Divider variant="middle" />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div>
          <ConfirmButton variant="contained">Matricular</ConfirmButton>
        </div>
      </CardActions>
    </Card>
  );
}
