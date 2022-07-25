import styled from "styled-components";
import { FiAnchor } from "../../styles/Icons";

export const Container = styled.div`
  background-color: #fcfcfc;
`;

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
// export const Banner = styled.img`
//   height: 500px;
//   width: 100%;
// `;

export const Banner = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  text-align: center;

  > img {
    width: 100%;
    height: 400px;
    position: relative;
  }

  > span {
    z-index: 1;
    position: absolute;
    top: 30%;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
`;

export const TitlePage = styled.div`
  background-color: #fcfcfc;
  color: #25363c;
  font-weight: 600;
  padding: 15px;
  text-align: center;
`;



export const Titulos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// export const Infos = styled.div`
//   font-size: 20px;
//   padding: 15px;
// `;

export const IconAncora = styled(FiAnchor)``;

// export const IconAncora = styled.div`
// `;
