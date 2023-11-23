import styled from 'styled-components';
import MainDiv from '../../Components/MainDiv';
import Nav from '../../Components/Nav';
import MainText from '../../Components/MainText';
import ButtonContainer from '../../Components/ButtonContainer';
import Button from '../../Components/Button';

import { getTitle, getOriginalAuthor, getAdaptationWriter } from './coverDataHandler';

const CoverText = styled(MainText)`
  margin-top: 30vh;
  font-family: 'NanumSquareNeo', sans-serif;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 500;
`;

const WriterInfo = styled.p`
  margin: 0.3em;
  font-size: 0.8em;
`;

const btnBgColor = '#06296C';

function StoryCoverView({ onModeChange }) {

  const coverTitle = getTitle();
  const coverOriginalAuthor = `원작 ${getOriginalAuthor()}`;
  const coverAdaptationWriter = `각색 ${getAdaptationWriter()}`;

  function handleClick() {
    onModeChange('readMode');
  }
  
  return (
    <MainDiv>
      <Nav/>
      <CoverText>
        <Title>{ coverTitle }</Title>
        <WriterInfo>{ coverOriginalAuthor }</WriterInfo>
        <WriterInfo>{ coverAdaptationWriter }</WriterInfo>
      </CoverText>
      <ButtonContainer>
        <Button $bgColor={ btnBgColor } onClick={ handleClick }>소설 시작하기</Button>
      </ButtonContainer>
    </MainDiv>
  );
}

export default StoryCoverView;