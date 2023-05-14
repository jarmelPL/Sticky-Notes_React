import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import styles from './Common.module.css'
import './NotePanel.css'

const NotePanel = (props) => {
    const [enteredText, setEnteredText] = useState('')
    const [enteredSelect, setEnteredSelect] = useState('')

    const textareaChangeHandler = (event) => {
        setEnteredText(event.target.value)
        // console.log(event.target.value)
    }
    const selectChangeHandler = (event) => {
        setEnteredSelect(event.target.value)
        // console.log(event.target.value)
    }

    const addNoteHandler = () => {
        const noteData = {
            category: enteredSelect,
            text: enteredText
        }

        console.log(noteData)
    }

  return (
    <React.Fragment>
        {ReactDOM.createPortal(
            <div className="note-panel-shadow">
                <div className="note-panel">
                    <h2>Dodaj notatkę</h2>
                    <label htmlFor="category">Wybierz kategorię</label>
                    <select id="category" defaultValue={0} onChange={selectChangeHandler}>
                        <option value="0" disabled>- wybierz kategorię     -</ option>
                        <option>Zakupy</option>
                        <option>Praca</option>
                        <option>Inne</option>
                    </select>

                    <label htmlFor="text">Wpisz treść notatki</label>
                    <textarea id="text" onChange={textareaChangeHandler}></textarea>

                    <p className="error">Uzupełnij wszystkie pola!</p>

                    <div className="panel-buttons">
                        <button className={styles.buttons} onClick={addNoteHandler}><i className="fas fa-save"></i> Zapisz</button>
                        <button className={styles.buttons} onClick={props.close}><i className="far fa-window-close"></i> Anuluj</button>
                    </div>
                </div>
            </div>,
        document.getElementById('root-note-panel')
        )
        }       
    </React.Fragment>
  );
}

export default NotePanel;