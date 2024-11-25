import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";
import * as React from "react";

export default function CustomList() {
  const alunos = [
    { cod: "0001", nome: "João da Silva", cpf: "123.456.789-00" },
    { cod: "0002", nome: "Maria Oliveira", cpf: "987.654.321-00" },
    { cod: "0003", nome: "Carlos Pereira", cpf: "111.222.333-44" },
    { cod: "0004", nome: "Ana Santos", cpf: "456.789.123-45" },
  ];

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} sx={{ padding: 0 }}>
          <Typography sx={{ mt: 0, mb: 2 }} variant="h6" component="div">
            Lista de Alunos Matriculados
          </Typography>
          <Paper elevation={2} sx={{ borderRadius: "0.6rem", paddingTop: 0 }}>
            <Box sx={{ maxHeight: "300px", overflowY: "auto" }}>
              <List dense={true}>
                {alunos.slice(0, 5).map((aluno, index) => (
                  <React.Fragment key={aluno.cod}>
                    <ListItem>
                      <ListItemText
                        primary={`Cod ${aluno.cod}`}
                        secondary={`Nome: ${aluno.nome} | CPF: ${aluno.cpf}`}
                      />
                    </ListItem>

                    {index < alunos.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
