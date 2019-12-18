import React from 'react';
import { countries } from '../../data/dataStore';
import Container from '../Container/Container.js';
import Section from '../Section/Section.js';
import Autocomplete from '../Autocomplete/AutocompleteContainer.js';
import PollutedCities from '../PollutedCities/PollutedCitiesContainer.js';
import PropTypes from 'prop-types';
import { updateMeasurements } from '../../redux/MainPageRedux';

class MainPage extends React.Component {

    static propTypes = {
        measurements: PropTypes.array,
        updateMeasurements: PropTypes.func,
    };

    componentDidMount() {
        fetch('https://api.openaq.org/v1/locations?country[]=PL&country[]=DE&country[]=FR&country[]=ES&order_by[]=count&sort=desc&limit=300')
        .then(res => res.json())
        .then(parsedRes => this.props.updateMeasurements(parsedRes.results));
    }
    
    render () {
        const {measurements} = this.props;
        return (
            <Container>
                <Section title='10 most polluted cities'>
                    <Autocomplete suggestions={countries} />
                    <PollutedCities cities={measurements}/> 
                </Section>
            </Container>
        );
    };
}
export default MainPage;