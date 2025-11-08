import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "./theme/theme";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { Button, Card, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { AppRoutes } from "./routes/AppRoutes";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext";

function AppContent() {
  const { darkMode } = useDarkMode();
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App;
