import React from 'react';
import {destinations} from '../../data/dataStore';
import shortid from 'shortid';
import Container from '../Container/Container.js';
import Section from '../Section/Section.js';
import Destination from '../Destination/Destination.js';

class MainPage extends React.Component {
    render () {
        return (
            <Container>
                <Section title="Choose your destination...">
                    {destinations.map(destinationData => (
                        <Destination key={ shortid.generate() } {...destinationData} />
                    ))}
                </Section>
            </Container>
        );
    };
}
export default MainPage;