import React from 'react'
import './NoteArea.css'
import Note from './Note.js'


const NoteArea = (props) => {
  return (
    <div className='note-area'>
    {props.items.map(note => 
        <Note 
            category={note.category}
            background={note.background}
            text={note.text}
            id={note.id}
            key={note.key}
        />)}
    </div>
  );
}

export default NoteArea;