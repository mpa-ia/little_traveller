import React from 'react';
import { destinations, countries } from '../../data/dataStore';
import shortid from 'shortid';
import Container from '../Container/Container.js';
import Section from '../Section/Section.js';
import Destination from '../Destination/Destination.js';
import Autocomplete from "../Autocomplete/AutocompleteContainer.js";

class MainPage extends React.Component {
    render () {
        return (
            <Container>
                <Section>
                    <Autocomplete suggestions={countries} /> 
                </Section>
            </Container>
        );
    };
}
export default MainPage;