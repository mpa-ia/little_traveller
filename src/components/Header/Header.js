import React from 'react';
import styles from './Header.scss';
import PropTypes from 'prop-types';

const Header = props => (
    <header className={styles.component}>
        <h1 className={styles.title}>{props.header}</h1>
        <img className={styles.image} src={props.background}/>
    </header>
);

Header.propTypes = {
    header: PropTypes.string,
    background: PropTypes.string,
};
export default Header;