import styled from "styled-components";
import MainText from './MainText';

const CoverText = styled(MainText)`
  margin-top: ${ (props) => props.$marginTop ? props.$marginTop : '30vh' };
  font-family: 'NanumSquareNeo', sans-serif;
  text-align: center;
`;

export default CoverText;