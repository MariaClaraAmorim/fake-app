import styled from "styled-components";
import { FiAnchor } from "../../styles/Icons";

export const TitlePage = styled.div`
  background-color: #fcfcfc;
  text-align: center;
  color: #25363c;
  font-weight: 600;
  padding: 15px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 15px;
`;

export const Comentario = styled.div`
  background-color: #25363c;
  padding: 15px;
  text-align: center;
  > p {
    color: #fff;
  }
`;

export const ComentariosPosts = styled.div`
  /* background-color: #25363c; */
  border: 2px dashed #137699;
  padding: 15px;
  margin-top: 15px;
`;
export const Email = styled.div`
  text-align: center;
`;

export const TextoComentario = styled.div``;

export const TextoTitulo = styled.div`
  color: #137699;
`;

export const PostList = styled.div`
  width: 100%;
  height: max(50%, max(60px, 20vw));
`;

export const IconAncora = styled(FiAnchor)``;
export const Titulos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
