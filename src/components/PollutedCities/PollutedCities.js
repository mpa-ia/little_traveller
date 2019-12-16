import React from 'react';
import PropTypes from 'prop-types';

const PollutedCities = ({ measurements }) => {
    console.log(measurements);
    return (
        <ul>
            {measurements.country == /* state.userInput */'Spain' ? measurements.map(() => {
                <li>
                    {measurements.country}
                </li>
            }) : ''}
    </ul>
    );
};

PollutedCities.propTypes = {
    measurements: PropTypes.array,
};

export default PollutedCities;



