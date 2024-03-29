import { HTMLAttributes } from "react";
import { Container, Wrapper } from "./styles";

import { Header } from "../../Header";
import React from "react";

interface DefaultTemplateProps extends HTMLAttributes<HTMLDivElement> {}

function DefaultTemplate(props: DefaultTemplateProps) {
  return (
    <Container>
      <Header />
      <Wrapper {...props} />
    </Container>
  );
}

export { DefaultTemplate };
