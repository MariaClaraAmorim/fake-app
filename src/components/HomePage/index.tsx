import React, { useEffect, useState } from "react";
import { Post } from "../../common/interfaces/Post";
import { PostMessage } from "../PostMessage";

import { Banner, Container, IconAncora, TitlePage, Titulos } from "./styles";

function HomePage({ title }: Post) {
  const [posts, setPosts] = useState<Post[]>([]);

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    setPosts(await response.json());
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      <Banner>
        <img
          src="https://ichef.bbci.co.uk/news/640/cpsprodpb/A1A8/production/_109348314_gettyimages-923623146.jpg"
          alt=""
        />
        <span>
          {title}
          Texto Ilustrativo
        </span>
      </Banner>
      <br />
      <Titulos>
        <IconAncora />
        <TitlePage>POSTS RECENTES</TitlePage>
      </Titulos>
      <br />
      {posts.map((post) => {
        return <PostMessage {...post} />;
      })}
    </Container>
  );
}

export { HomePage };
