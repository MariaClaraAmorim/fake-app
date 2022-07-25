import React from "react";

import { Navegacao } from "./styles";

function Header() {
  return (
    <Navegacao>
      <a href="/">
        <li>Home</li>
      </a>

      <a href="/catgenerator">
        <li>CatGenerator</li>
      </a>
    </Navegacao>
  );
}

export { Header };
