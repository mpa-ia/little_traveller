import React from 'react';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import {pageContent} from '../../data/dataStore'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header header={pageContent.headerTitle} background={pageContent.headerBackground}/>
                <MainPage />
            </div>
        )
    }
}

export default App