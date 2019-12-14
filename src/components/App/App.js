import React from 'react';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import {pageContent} from '../../data/dataStore'

import MainLayout from '../MainLayout/MainLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Destinations from '../Destinations/Destinations';

class App extends React.Component {
    render() {
        return (
            <MainLayout>
                <BrowserRouter>
                    <Header header={pageContent.headerTitle} background={pageContent.headerBackground}/>
                    <Switch>
                        <Route exact path='/' component={MainPage}/>
                        <Route exact path='/destinations' component={Destinations}/>
                    </Switch>
                </BrowserRouter>
            </MainLayout>
        )
    }
}

export default App