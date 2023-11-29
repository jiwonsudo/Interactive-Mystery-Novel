import { useEffect, useState } from 'react';

import MainDiv from '../../Components/MainDiv';
import MainText from '../../Components/MainText';
import Divider from '../../Components/Divider';
import ButtonContainer from '../../Components/ButtonContainer';
import Button from '../../Components/Button';

import { getMainStory, getChoiceA, getChoiceB, getIfEnd } from './readDataGetter';

const btnABgColor = '#C9C9C9';
const btnBBgColor = '#0C3E9D';
const btnAColor = '#000000';

function StoryReadView({ onModeChange, onDataHandle }) {

  const [userChoices, setUserChoices] = useState([]); // add 'A' when first choice selected, add 'B' when second'.
  const [mainText, setMainText] = useState('');
  const [btnAText, setBtnAText] = useState('');
  const [btnBText, setBtnBText] = useState('');
  const [btnADisp, setBtnADisp] = useState('block');
  const [isEnd, setIsEnd] = useState(false);

  function handleClick(event) {
    if (isEnd === true) {
      onModeChange('endMode');
      onDataHandle(userChoices);
    } else {
      if (event.target.id === 'btnA') {
        setUserChoices([...userChoices, 'A']);
      } else if (event.target.id === 'btnB') {
        setUserChoices([...userChoices, 'B']);
      }
    }
  }

  // On first render
  useEffect(() => {
    setMainText(getMainStory(userChoices));
    setBtnAText(getChoiceA(userChoices));
    setBtnBText(getChoiceB(userChoices));
  }, [userChoices]);

  useEffect(() => {
    if (getIfEnd(userChoices) === true) {
      setIsEnd(true);
      setMainText(getMainStory(userChoices));
      setBtnADisp('none');
      setBtnBText('결과 확인하기');
    } else {
      setMainText(getMainStory(userChoices));
      setBtnAText(getChoiceA(userChoices));
      setBtnBText(getChoiceB(userChoices));
    }
  }, [userChoices]);

  return (
    <MainDiv>
      <MainText>{ mainText }</MainText>
      <Divider/>
      <ButtonContainer>
        <Button id='btnA' $isVisible={ btnADisp } $bgColor={ btnABgColor } $color={ btnAColor } onClick={ event => handleClick(event) }>{ btnAText }</Button>
        <Button id='btnB' $bgColor={ btnBBgColor } onClick={ event => handleClick(event) }>{ btnBText }</Button>
      </ButtonContainer>
    </MainDiv>
  );
}

export default StoryReadView;