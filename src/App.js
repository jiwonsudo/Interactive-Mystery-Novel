import { useState } from 'react';
import StoryCoverView from './views/StoryCoverView';

function App() {
  const [mode, setMode] = useState('coverMode')  // coverMode, readMode, endMode
  let view = null;

  function handleChangeMode(newMode) {
    setMode(newMode);
  } 

  if (mode === 'coverMode') {
    view = <StoryCoverView onModeChange={ handleChangeMode }/>;
  } else if (mode === 'readMode') {
    // view = <StoryReadView/>
  } else if (mode === 'endMode') {
    // view = <StoryEndView/>
  }

  return (
    <>
      { view }
    </>
  );
}

export default App;
