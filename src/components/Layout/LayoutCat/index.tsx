import { DefaultTemplate } from "../../templates/Default";

import { Gerador } from "../../Gerador";
import React from "react";

function LayoutCat() {
  return (
    <DefaultTemplate>
      <Gerador/>
    </DefaultTemplate>
  );
}

export { LayoutCat };