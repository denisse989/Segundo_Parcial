import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useStore } from "../context/ContextProvider";
import { useEffect } from "react";
import { darkTheme, ligthTheme } from "./theme";


export const AppTheme = ({ children }) => {
  const {theme} = useStore();
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeProvider theme={ligthTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
