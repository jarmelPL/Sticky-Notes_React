import React, {useState} from 'react'
import Menu from './components/Menu.js'
import NoteArea from './components/NoteArea.js'
import NotePanel from './components/NotePanel.js'
import './App.css'


const App = () => {
  const [panel, setPanel] = useState(true)

    const closePanel = () => {
      setPanel(false)
    }
    const openPanel = () => {
      setPanel(true)
    }


  return (
    <React.Fragment>
      <Menu open={openPanel}/>
      <NoteArea />
      {panel && <NotePanel close={closePanel}/>}
    </React.Fragment>
  );
}

export default App;
