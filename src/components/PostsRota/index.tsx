import React from "react";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  TitlePage,
  Comentario,
  ComentariosPosts,
  Email,
  TextoTitulo,
  TextoComentario,
  PostList,
  IconAncora,
  Titulos,
} from "./styles";

import { Post } from "../../common/interfaces/Post";
import { InterfacePerfil } from "../../common/interfaces/InterfacePerfil";
import { InterfaceComments } from "../../common/interfaces/InterfaceComments";
import { PostMessage } from "../PostMessage";

function PostsRota() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [user, setUser] = useState<InterfacePerfil>();
  const [comments, setComments] = useState<InterfaceComments[]>([]);

  const { userId, postId } = useParams();

  async function getPosts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?id=" + postId
    );

    setPosts(await response.json());
  }

  useEffect(() => {
    getPosts();
  }, []);

  async function getComments() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=" + postId
    );

    setComments(await response.json());
  }

  useEffect(() => {
    getComments();
  }, []);

  async function getInfoUser() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );

    setUser(await response.json());
  }

  useEffect(() => {
    getInfoUser();
  }, []);
  return (
    <>
      <Titulos>
        <IconAncora />
        <TitlePage>Postagem de {user?.name}</TitlePage>
      </Titulos>

      <Comentario>
        {posts.map((post) => {
          return (
            <PostList>
              <PostMessage {...post} />
            </PostList>
          );
        })}
      </Comentario>
      <br />
      {comments.map((comment) => {
        return (
          <ComentariosPosts>
            <Email>E-mail: {comment.email}</Email>
            {posts.map((post) => {
              return <TextoTitulo>{post.title}</TextoTitulo>;
            })}
            <TextoComentario>{comment.body}</TextoComentario>
          </ComentariosPosts>
        );
      })}
      <br />
    </>
  );
}

export { PostsRota };
