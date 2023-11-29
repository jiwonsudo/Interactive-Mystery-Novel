import { createGlobalStyle } from "styled-components";
import MaruBuriSB from "./MaruBuri-SB.otf";
import NanumSquareNeo from "./NanumSquareNeo-Variable.ttf";

const fonts = createGlobalStyle`
  @font-face {
    font-family: 'NanumSquareNeo';
    font-style: normal;
    src: url(${NanumSquareNeo}) format('truetype');
  }
  @font-face {
    font-family: 'MaruBuriSB';
    font-style: normal;
    src: url(${MaruBuriSB}) format('opentype');
  }
`;

export default fonts;