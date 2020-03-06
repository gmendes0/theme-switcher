import styled from "styled-components";

export const Container = styled.header`
  background-color: ${props => props.theme.colors.primary};
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 50px;
  grid-area: header;
  justify-content: space-between;
`;

export const Brand = styled.span`
  font-weight: bold;
`;

export const Select = styled.select`
  border-radius: 5px;
  border: none;
  padding: 5px 20px;
  outline-color: ${props => props.theme.colors.primary};
  outline-radius: 5px;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text_secondary};
`;

export const Option = styled.option``;
