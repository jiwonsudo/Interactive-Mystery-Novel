import MainDiv from '../../Components/MainDiv';
import CoverText from '../../Components/CoverText';
import Title from '../../Components/Title';
import WriterInfo from '../../Components/WriterInfo';
import ButtonContainer from '../../Components/ButtonContainer';
import Button from '../../Components/Button';

import { getTitle, getOriginalAuthor, getAdaptationWriter } from './coverDataGetter';

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