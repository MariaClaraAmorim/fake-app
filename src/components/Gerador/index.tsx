import React from "react";

import { useEffect, useState } from "react";

import { TitlePage, IconCat, Button, ContainerImagem } from "./styles";

function Gerador() {
  const [catUrl, setCatUrl] = useState();

  const [reloadCounter, setReloadCounter] = useState(1);

  const catApi = "https://cataas.com";
  useEffect(() => {
    async function getCat(catApi: any) {
      const response = await fetch(catApi + "/cat?json=true");
      const json = await response.json();
      setCatUrl(json.url);
    }

    getCat(catApi);
  }, [reloadCounter, catApi]);

  return (
    <>
      <TitlePage>GERADOR DE GATINHOS</TitlePage>

      <ContainerImagem>
        <IconCat>
          <img src={`${catApi}/${catUrl}`} alt="cat" />
        </IconCat>

        <br />
      </ContainerImagem>
      <br />

      <ContainerImagem>
        <Button onClick={() => setReloadCounter((value) => value + 1)}>
          BUSCAR NOVO GATINHO
        </Button>
      </ContainerImagem>

      <TitlePage>JÁ GERAMOS {reloadCounter} GATINHOS HOJE</TitlePage>
    </>
  );
}

export { Gerador };
