import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = title => {
    setTheme(title === "dark" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
