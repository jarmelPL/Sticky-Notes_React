import React, {useState} from 'react'
import Menu from './components/Menu.js'
import NoteArea from './components/NoteArea.js'
import NotePanel from './components/NotePanel.js'
import './App.css'

let noteID = 1

const App = () => {
  
  const [panel, setPanel] = useState(true)

    const closePanel = () => {
      setPanel(false)
    }
    const openPanel = () => {
      setPanel(true)
    }

  const [notes, setNotes] = useState ([])
  const generateNotes = (data) => {
    setNotes(previousNotes => { return [...previousNotes, data ] })
    noteID++
  }
  const deleteNotes = () => {
    setNotes([])
    noteID = 1
  }

  const deleteOneNote = (itemID) => {
    setNotes(prevNotes => {
      const newNotes = prevNotes.filter(item => item.id != itemID)
      return newNotes
    })
  }

  return (
    <React.Fragment>
      <Menu open={openPanel} deleteAll={deleteNotes}/>
      <NoteArea items={notes} deleteOne={deleteOneNote}/>
      {panel && <NotePanel close={closePanel} addNote={generateNotes} newNoteID={noteID}/>}
    </React.Fragment>
  );
}

export default App;
