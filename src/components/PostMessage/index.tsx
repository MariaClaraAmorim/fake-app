import { InterfacePerfil } from "../../common/interfaces/InterfacePerfil";
import { Post } from "../../common/interfaces/Post";
import { Container, IconUser, Nome, Texto, Infos, PostList } from "./styles";

import { useEffect, useState } from "react";
import React from "react";

function PostMessage({ body, userId, id }: Post) {
  const [users, setUsers] = useState<InterfacePerfil>();

  const urlImageUser =
    "https://avatars.dicebear.com/api/open-peeps/" + userId + ".svg";

  async function getInfoUser() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );

    setUsers(await response.json());
  }

  useEffect(() => {
    getInfoUser();
  }, []);

  return (
    <Container>
      <IconUser>
        <a href={"/perfilusuario/" + userId}>
          <img
            src={
              "https://avatars.dicebear.com/api/open-peeps/" + userId + ".svg"
            }
            alt="Imagem avatar"
          />
        </a>
      </IconUser>
      <Infos>
        <Nome>{users?.name}</Nome>
        <a href={"/user/" + userId + "/postrota/" + id}>
          <Texto>{body}</Texto>
        </a>
      </Infos>

      <br />
    </Container>
  );
}

export { PostMessage };
