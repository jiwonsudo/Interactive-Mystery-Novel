import { useEffect, useState } from 'react';
import storiesData from '../data/stories.json';
import MainText from './MainText';

function Contents({ onModeChange }) {
  

  const [mainContent, setMainContent] = useState('눈에 갇힌 외딴 산장에서 - 히가시노 게이고');
  const [userChoices, setUserChoices] = useState([]);  // use 'A' for choosing gray, use 'B' for choosing blue.
  const [btnBlueContent, setBtnBlueContent] = useState('파란 버튼 테스트 글');
  const [btnGrayContent, setBtnGrayContent] = useState('회색 버튼 테스트 글');
  
  const [endReached, setEndReached] = useState(false);

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
    
  }, [userChoices, onModeChange, endReached]);

  return (
    <>
      <MainText>{mainContent}</MainText>
      { buttons }
    </>
  );
}

export default Contents;