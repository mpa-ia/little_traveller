import React from 'react';
import PropTypes from 'prop-types';

const PollutedCities = ({ measurements }) => {
    console.log(measurements);
    return (
        <ul>
            {measurements.filter(a => a.country == 'ES').map(a => (            
                <li key={a.id}>{a.city}</li>
            ))}
        </ul>
        );
    };

PollutedCities.propTypes = {
    measurements: PropTypes.array,
};

export default PollutedCities;



