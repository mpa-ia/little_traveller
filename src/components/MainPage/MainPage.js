import React from 'react';
import { countries } from '../../data/dataStore';
import Container from '../Container/Container.js';
import Section from '../Section/Section.js';
import Autocomplete from '../Autocomplete/AutocompleteContainer.js';
import PollutedCities from '../PollutedCities/PollutedCities.js';

class MainPage extends React.Component {
    state = {
        measurements: [],
    };

    componentDidMount() {
        fetch('https://api.openaq.org/v1/locations?country[]=DE&country[]=PL&country[]=FR&country[]=ES')
        .then(res => res.json())
        .then(parsedRes => this.setState({measurements: parsedRes.results}));
    }
    
    render () {
        return (
            <Container>
                <Section title="Check Air Pollution in Europe">
                    <Autocomplete suggestions={countries} />
                    <PollutedCities measurements={this.state.measurements}/> 
                </Section>
            </Container>
        );
    };
}
export default MainPage;