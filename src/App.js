import { useState } from 'react';
import Nav from './Components/Nav';
import CoverContents from './Components/CoverContents';
import StoryContents from './Components/StoryContents'
import { MainDiv } from './Components/GlobalStyle';

function App() {
  const [mode, setMode] = useState('coverMode')  // coverMode, storyMode, endMode
  let content = null;

  function handleModeChange(newMode) {
    setMode(newMode);
  }

  if (mode === 'coverMode') {
    content = <CoverContents onModeChange={handleModeChange}></CoverContents>;
  } else if (mode === 'storyMode') {
    content = <StoryContents onModeChange={handleModeChange}></StoryContents>;
  }

  return (
    <MainDiv>
      <Nav></Nav>
      { content }
    </MainDiv>
  );
}

export default App;
