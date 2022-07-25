import React, { useEffect, useState } from "react";
import { Post } from "../../common/interfaces/Post";
import { InterfacePerfil } from "../../common/interfaces/InterfacePerfil";

import { PostMessage } from "../PostMessage";
import {
  TitlePage,
  PostList,
  IconUser,
  AnchorIcon,
  Avatar,
  Nome,
  Texto,
  Infos,
  Titulos,
  Banner,
} from "./styles";
import { useParams } from "react-router-dom";
import { Container } from "../PostMessage/styles";

function Perfil() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<InterfacePerfil>();

  const { userId } = useParams();

  async function getInfoUser() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );

    setUsers(await response.json());
  }

  useEffect(() => {
    getInfoUser();
  }, []);

  async function getPosts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + userId
    );

    setPosts(await response.json());
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Titulos>
        <TitlePage>
          <AnchorIcon />
          {users?.name}
        </TitlePage>
      </Titulos>
      <Banner>
        <Avatar>
          <img
            src={
              "https://avatars.dicebear.com/api/open-peeps/" + userId + ".svg"
            }
            alt="Imagem avatar"
          />
        </Avatar>
      </Banner>

      {posts.map((post) => {
        return <PostMessage {...post} />;
      })}

      <br />
    </>
  );
}

export { Perfil };

//  display: grid;
//  grid-template-columns: repeat(2, 1fr);
//  grid-column-gap: 10px;
//  grid-row-gap: 1em;
