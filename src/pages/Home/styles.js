import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-rows: 10vh 90vh;
  grid-template-areas: "header" "main";
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: main;
`;

export const Title = styled.h1`
  font-weight: bold;
`;

export const Card = styled.div`
  padding: 30px;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${props => props.theme.colors.text_secondary};
  background-color: ${props => props.theme.colors.secondary};
`;
