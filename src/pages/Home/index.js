import React from "react";

import { Container, Main, Title } from "./styles";

import Header from "../../components/Header";

export default function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Title>Home</Title>
      </Main>
    </Container>
  );
}
