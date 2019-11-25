import React from 'react';
import styles from './Header.scss';

const Header = () => (
    <header className={styles.component}>
        <h1 className={styles.title}>Explore yourself</h1>
        <img className={styles.image} src="https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
    </header>
);

export default Header;