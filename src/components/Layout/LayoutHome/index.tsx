import { DefaultTemplate } from "../../templates/Default";

import { HomePage } from "../../HomePage";
import React from "react";

function LayoutHome() {
  return (
    <DefaultTemplate>
      <HomePage/>
    </DefaultTemplate>
  );
}

export { LayoutHome };