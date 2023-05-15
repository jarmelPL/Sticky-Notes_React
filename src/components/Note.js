import React from 'react'
import './Note.css'


const Note = (props) => {

  return (
        <div className={"note"+' '+ props.background}>
            <div className="note-header">
                <h3 className="note-title">#{props.id} {props.category}</h3>
                <button className="delete-note">
                    <i className="fas fa-times icon"></i>
                </button>
            </div>
            <div className="note-body">
                {props.text}
            </div>
        </div>
  );
}

export default Note;