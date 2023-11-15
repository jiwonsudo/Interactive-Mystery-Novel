import { createGlobalStyle } from 'styled-components';
import MaruBuriSB from './fonts/MaruBuri-SemiBold.otf';
import NanumSquareNeo from './fonts/NanumSquareNeo-Variable.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MaruBuriSB';
    src: url(${MaruBuriSB});
  }
  @font-face {
    font-family: 'NanumSquareNeo';
    src: url(${NanumSquareNeo});
  }
`;

export default GlobalStyle;