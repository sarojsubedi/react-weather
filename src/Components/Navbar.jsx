import { useState } from 'react';
import styles from './navbar.module.css'
function Navbar() {

    return (
        <>
            <ul className={styles.list}>
                <li>Home</li>
                <li>About</li>
                <li>More to come</li>
            </ul>
            <hr/>
        </>
    )
}
export default Navbar;