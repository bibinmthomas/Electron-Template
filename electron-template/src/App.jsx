import React from "react";
import {
  ThemeProvider,
  createTheme,
  Button,
  Container,
  Typography,
  Box,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <Box>
          <div className="min-h-screen max-h-full bg-zinc-950">
            <div className="font-bold text-white">Testing</div>
          </div>
        </Box>
    </ThemeProvider>
  );
}
