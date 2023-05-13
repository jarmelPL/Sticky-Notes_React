import React from 'react'
import Menu from './components/Menu.js'
import NoteArea from './components/NoteArea.js'
import NotePanel from './components/NotePanel.js'
import './App.css'


const App = () => {
  return (
    <React.Fragment>
      <Menu />
      <NoteArea />
      <NotePanel />
    </React.Fragment>
  );
}

export default App;
