import React from 'react';
import styles from './Section.scss';
import PropTypes from 'prop-types';

const Section = ({title, children}) => (
  <div className={styles.component}>
    <h3 className={styles.title}>{title}</h3>
    {children}
  </div>
);

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Section;