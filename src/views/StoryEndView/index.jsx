import { useEffect } from "react";
import MainDiv from "../../Components/MainDiv";
import MainText from "../../Components/MainText";
import CoverText from "../../Components/CoverText";
import Title from "../../Components/Title";
import WriterInfo from '../../Components/WriterInfo';
import Divider from "../../Components/Divider";
import ButtonContainer from "../../Components/ButtonContainer";
import Button from "../../Components/Button";

import copy from "./linkCopier";
import { getSerialStories, getTitle } from "./endDataGetter";
import { shareKakao } from "./kakaoShareHandler";

function StoryEndView({ userChoices }) {
  const btnShareBgColor = '#F7E600';
  const btnCopyLinkBgColor = '#C9C9C9';
  const btnReplayBgColor = '#0C3E9D';
  const btnShareColor = '#191919';
  
  const coverTitle = getTitle();
  const mainText = getSerialStories(userChoices);

  const marginTop = '60px';

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);
  
  return(
    <MainDiv>
      <CoverText $marginTop={ marginTop }>
        <Title>{ coverTitle }</Title>
        <WriterInfo>플레이어님만의 소설을 완성했습니다!</WriterInfo>
      </CoverText>
      <MainText>{ mainText }</MainText>
      <Divider/>
      <ButtonContainer>
        <Button $bgColor={ btnReplayBgColor } onClick={ () => window.location.replace('/Interactive-Novel-Webapp') }>처음부터 다시하기</Button>
        <Button $bgColor={ btnCopyLinkBgColor } onClick={ () => copy('시작 화면의 링크가 복사되었어요!') }>플레이 링크 복사하기</Button>
        <Button $bgColor={ btnShareBgColor } $color={ btnShareColor } onClick={ () => shareKakao(`스토리레일 - ${coverTitle}`, '내가 직접 플레이하는 소설') }>카톡으로 공유하기</Button>
      </ButtonContainer>
    </MainDiv>
  )
}

export default StoryEndView;