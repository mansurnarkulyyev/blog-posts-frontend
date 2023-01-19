import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  overrides: {
    MuiAppBar: {
      root: {
        'box-shadow':'none'
      }
    }
  },
  palette: {
    primary: {
      main: "#4361ee",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
});
