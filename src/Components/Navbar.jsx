import { useState } from 'react';
import styles from './navbar.module.css'
function Navbar() {

    return (
        <>
            <ul className={styles.list}>
                <li><a href="/">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="https://github.com/sarojsubedi" target="_blank" rel="noopener noreferrer">More to come</a></li>
            </ul>
            <hr/>
        </>
    )
}
export default Navbar;