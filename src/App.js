import { useState } from 'react';
import Nav from './Components/Nav';
import StoryCoverView from './views/StoryCoverView';
import StoryReadView from './views/StoryReadView';
import StoryEndView from './views/StoryEndView';

function App() {
  const [mode, setMode] = useState('coverMode')  // coverMode, readMode, endMode
  const [userChoices, setUserChoices] = useState([]);
  let view = null;

  function handleChangeMode(newMode) {
    setMode(newMode);
  }

  function handleUserChoices(newUserChoices) {
    setUserChoices(newUserChoices);
  }

  if (mode === 'coverMode') {
    view = <StoryCoverView onModeChange={ handleChangeMode }/>;
  } else if (mode === 'readMode') {
    view = <StoryReadView onModeChange={ handleChangeMode } onDataHandle={ handleUserChoices }/>;
  } else if (mode === 'endMode') {
    view = <StoryEndView userChoices={ userChoices }/>;
  }

  return (
    <>
      <Nav/>
      { view }
    </>
  );
}

export default App;
