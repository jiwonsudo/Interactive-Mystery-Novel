import createGlobalStyle from 'styled-components';
import NanumMyeongjo from '../fonts/NanumMyeongjo.ttf';
import NanumSquareNeo from '../fonts/NanumSquareNeo-Variable.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumMyeongjo';
    src: url(${NanumMyeongjo});
  }
  @font-face {
    font-family: 'NanumSquareNeo';
    src: url(${NanumSquareNeo});
  }
`;

export default GlobalStyle;