import React from 'react';
import PropTypes from 'prop-types';

const PollutedCities = ({ cities }) => {
    console.log(cities);
    return (
        <ul>
            {cities.map(a => (            
                <li key={a.id}>{a.city}</li>
            ))}
        </ul>
        );
    };

PollutedCities.propTypes = {
    cities: PropTypes.array,
};

export default PollutedCities;



