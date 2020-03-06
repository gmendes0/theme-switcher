import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Container, Main, Title, Card } from "./styles";

import Header from "../../components/Header";

export default function Home({ toggleTheme }) {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
      <Main>
        <Title>Home</Title>
        <Card>
          <h3>Primary: {colors.primary}</h3>
          <h3>Secondary: {colors.secondary}</h3>
          <h3>Text: {colors.text}</h3>
        </Card>
      </Main>
    </Container>
  );
}
