import React from "react";

import { Container, Brand, Select, Option } from "./styles";

export default function Header({ toggleTheme }) {
  return (
    <Container>
      <Brand>Theme Switcher</Brand>
      <Select id="theme" onInput={event => toggleTheme(event.target.value)}>
        <Option value="light">light</Option>
        <Option value="dark">dark</Option>
      </Select>
    </Container>
  );
}
