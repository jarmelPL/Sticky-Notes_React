import React from 'react'
import styles from './Common.module.css'
import './Menu.css'


const Menu = () => {
  return (
    <div className='menu'>
        <h1><i className="fas fa-sticky-note"></i> MyNotes</h1>
        <div className="menu-buttons">
            <button className={styles.buttons}><i className="fas fa-plus"></i> Dodaj</button>
            <button className={styles.buttons}><i className="fas fa-trash-alt"></i> Usuń wszystkie</button>
        </div>
    </div>
  );
}

export default Menu;