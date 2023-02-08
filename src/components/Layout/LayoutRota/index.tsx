import { DefaultTemplate } from "../../templates/Default";

import { PostsRota } from "../../PostsRota";
import React from "react";

function LayoutRota() {
  return (
    <DefaultTemplate>
      <PostsRota/>
    </DefaultTemplate>
  );
}

export { LayoutRota };