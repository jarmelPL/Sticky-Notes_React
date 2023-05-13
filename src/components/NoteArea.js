import React from 'react'
import './NoteArea.css'


const NoteArea = () => {
  return (
    <div className='note-area'>
        <div className="note">
            <div className="note-header">
                <h3 className="note-title">Notatka #1</h3>
                <button className="delete-note">
                    <i className="fas fa-times icon"></i>
                </button>
            </div>
            <div className="note-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolores consectetur sapiente optio nobis
                obcaecati quisquam. Ullam, aut. Minus iste iure recusandae saepe officiis voluptas, molestiae
                accusantium at ipsa consequuntur!
            </div>
        </div>
    </div>
  );
}

export default NoteArea;