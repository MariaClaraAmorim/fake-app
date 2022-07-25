import { DefaultTemplate } from "../../templates/Default";

import { HomePage } from "../../HomePage";

function LayoutHome() {
  return (
    <DefaultTemplate>
      <HomePage/>
    </DefaultTemplate>
  );
}

export { LayoutHome };