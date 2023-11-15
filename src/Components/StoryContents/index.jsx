import styled from 'styled-components';
import { useEffect, useState } from 'react';
import storiesData from '../../data/stories.json';
import { Button, ButtonContainer } from '../Buttons';

const MainText = styled.div`
  margin: 30px 15px 0;
  color: #000000;
  font-family: 'NanumMyeongjo', serif;
  font-size: 1em;
  line-height: 1.5em;
`;

function Contents() {
  const btnBlueBgColor = '#0C3E9D';
  const btnGrayBgColor = '#C9C9C9';
  const btnBlueColor = '#FFFFFF';
  const btnGrayColor = '#FFFFFF';

  const [mainContent, setMainContent] = useState('눈에 갇힌 외딴 산장에서 - 히가시노 게이고');
  const [userChoices, setUserChoices] = useState([]);  // use 'A' for choosing gray, use 'B' for choosing blue.
  const [btnBlueContent, setBtnBlueContent] = useState('파란 버튼 테스트 글');
  const [btnGrayContent, setBtnGrayContent] = useState('회색 버튼 테스트 글');

  const [hideButtons, setHideButtons] = useState(false);

  function getDataByPartialKey(storiesData, partialKey) {
    const matchingKey = Object.keys(storiesData).find(key => key.includes(partialKey));

    if (matchingKey) {
      return storiesData[matchingKey];
    } else {
      return null;
    }
  }

  function updateContents(props) {
    if (props.target.id === 'btnGray') {
      setUserChoices([...userChoices, 'A']);
    } else if (props.target.id === 'btnBlue') {
      setUserChoices([...userChoices, 'B']);
    }
  }

  useEffect(() => {
    console.log(userChoices);
    const storyKey = `story${userChoices.join('')}`;
    const storyData = getDataByPartialKey(storiesData, storyKey);
    setMainContent(storyData.main);

    if (storyData.end === true) {
      setHideButtons(true);
    } else {
      setBtnGrayContent(storyData.choiceA);
      setBtnBlueContent(storyData.choiceB);
    }
  }, [userChoices]);

  return (
    <>
      <MainText>{mainContent}</MainText>
      <ButtonContainer>
        <Button id='btnGray' $bgColor={btnGrayBgColor} $color={btnGrayColor} $isHidden={hideButtons} onClick={props => updateContents(props)}>{btnGrayContent}</Button>
        <Button id='btnBlue' $bgColor={btnBlueBgColor} $color={btnBlueColor} $isHidden={hideButtons} onClick={props => updateContents(props)}>{btnBlueContent}</Button>
      </ButtonContainer>
    </>
  );
}

export default Contents;