import React from 'react';
import styles from './Destination.scss';
import PropTypes from 'prop-types';

const Destination = ({ photo, destination, description }) => (
    <div className={styles.component}>
        <img className={styles.photo} src={photo}/>
        <h4 className={styles.destination}>{destination}</h4>
        <p className={styles.description}>{description}</p>
    </div>
);

Destination.propTypes = {
    photo: PropTypes.string,
    destination: PropTypes.string,
    description: PropTypes.string,
};

export default Destination;