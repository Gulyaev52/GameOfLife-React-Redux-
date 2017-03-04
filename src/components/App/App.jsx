import React from 'react';
import './App.styl';
import UniverseContainer from '../../containers/UniverseContainer';
import TopMenu from '../TopMenu/TopMenu';
import BottomMenu from '../BottomMenu/BottomMenu';

function App() {
  return (
    <div className='app'>
      <TopMenu />
      <UniverseContainer />
      <BottomMenu />
    </div>
  );
} 

export default App;