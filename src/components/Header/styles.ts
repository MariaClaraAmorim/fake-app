import styled from "styled-components";

export const Navegacao = styled.div`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  padding: 15px;
  background-color: #25363c;

  > a {
    text-decoration: none;
    color: #25363c;
  }

  > a li {
    background: #fff;
    padding: 10px;
  }
`;