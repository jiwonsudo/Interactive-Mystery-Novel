import Button from "../../Components/Button";
import ButtonContainer from "../../Components/ButtonContainer";
import MainDiv from "../../Components/MainDiv";
import MainText from "../../Components/MainText";

import getSerialStories from "./endDataGetter";

function StoryEndView({ userChoices }) {
  const mainText = getSerialStories(userChoices);

  const btnShareBgColor = '#FEE500';
  const btnReplayBgColor = '#0C3E9D';
  const btnShareColor = '#191919';

  return(
    <MainDiv>
      <MainText>{ mainText }</MainText>
      <ButtonContainer>
        <Button $bgColor={ btnReplayBgColor } onClick={ () => window.location.replace('/') }>처음부터 다시하기</Button>
        <Button $bgColor={ btnShareBgColor } $color={ btnShareColor }>카톡으로 공유하기</Button>
      </ButtonContainer>
    </MainDiv>
  )
}

export default StoryEndView;