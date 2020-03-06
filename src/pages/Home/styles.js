import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-rows: 10vh 90vh;
  grid-template-areas: "header" "main";
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  grid-area: main;
`;

export const Title = styled.h1`
  font-weight: bold;
`;
