import React from 'react';
import styles from './Header.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Header = props => (
    <header className={styles.component}>
        <h1 className={styles.title}>{ReactHtmlParser(props.header)}</h1>
        <img className={styles.image} src={props.background}/>
    </header>
);

Header.propTypes = {
    header: PropTypes.node,
    background: PropTypes.string,
};
export default Header;