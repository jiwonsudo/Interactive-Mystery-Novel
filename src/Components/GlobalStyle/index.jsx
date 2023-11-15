import { createGlobalStyle, styled } from 'styled-components';
import NanumMyeongjo from '../../fonts/NanumMyeongjo.ttf';
import NanumSquareNeo from '../../fonts/NanumSquareNeo-Variable.ttf';

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

const MainDiv = styled.div`
  width: 100vw;
  background-color: #FFFFFF;
`;

export { GlobalStyle, MainDiv };