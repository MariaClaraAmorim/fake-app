import { DefaultTemplate } from "../../templates/Default";

import { PostsRota } from "../../PostsRota";

function LayoutRota() {
  return (
    <DefaultTemplate>
      <PostsRota/>
    </DefaultTemplate>
  );
}

export { LayoutRota };