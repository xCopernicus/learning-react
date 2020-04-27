import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Home/HomeContainer';
import Info from '../Info/InfoContainer';
import Faq from '../Faq/FaqContainer';
import List from '../List/ListContainer';
import SearchResutls from '../SearchResults/SearchResultsContainer';
import styles from './App.scss';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path='/list/:id' component={List} />
        <Route exact path='/search/:title' component={SearchResutls} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
