import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
export default function Paginator() {
  const StyledPagination = styled(Pagination)(({ theme }) => ({
    "& .MuiPaginationItem-root.Mui-selected": {
      backgroundColor: "var(--primaryColor)",
      color: "var(--fontColorLight)",
    },
    "& .MuiPaginationItem-root.Mui-selected:hover": {
      backgroundColor: "var(--primaryColorHover)",
    },
  }));

  return (
    <Stack spacing={2}>
      <StyledPagination count={5} size="large" variant="outlined" />
    </Stack>
  );
}
