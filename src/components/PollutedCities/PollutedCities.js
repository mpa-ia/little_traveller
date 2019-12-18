import React from 'react';
import PropTypes from 'prop-types';

import styles from './PollutedCities.scss';

const PollutedCities = ({ cities }) => {
    return (
        <ul className={styles.component}>
            {cities.map(data => (            
                <li className={styles.listItem} key={data.id}>{data.city}</li>
            ))}
        </ul>
        );
    };

PollutedCities.propTypes = {
    cities: PropTypes.array,
};

export default PollutedCities;



