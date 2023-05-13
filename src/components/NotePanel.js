import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Common.module.css'
import './NotePanel.css'

const NotePanel = () => {

  return (
    <React.Fragment>
        {ReactDOM.createPortal(
            <div className="note-panel-shadow">
                <div className="note-panel">
                    <h2>Dodaj notatkę</h2>
                    <label for="category">Wybierz kategorię</label>
                    <select id="category">
                        <option value="0" disabled selected>- wybierz kategorię     -</ option>
                        <option value="1">Zakupy</option>
                        <option value="1">Praca</option>
                        <option value="1">Inne</option>
                    </select>

                    <label for="text">Wpisz treść notatki</label>
                    <textarea id="text"></textarea>

                    <p className="error">Uzupełnij wszystkie pola!</p>

                    <div className="panel-buttons">
                        <button className={styles.buttons}><i className="fas        fa-save"></i> Zapisz</button>
                        <button className={styles.buttons}><i className="far        fa-window-close"></i> Anuluj</button>
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