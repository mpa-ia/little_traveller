import React from 'react';
import { countries } from '../../data/dataStore';
import Container from '../Container/Container.js';
import Section from '../Section/Section.js';
import Autocomplete from '../Autocomplete/AutocompleteContainer.js';
import PollutedCities from '../PollutedCities/PollutedCities.js';

class MainPage extends React.Component {
    render () {
        return (
            <Container>
                <Section>
                    <Autocomplete suggestions={countries} />
                    <PollutedCities country={'Poland'}/> 
                </Section>
            </Container>
        );
    };
}
export default MainPage;