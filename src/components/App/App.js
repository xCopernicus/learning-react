import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
//import {settings, pageContents, lists} from '../../data/dataStore.js';
import List from '../List/ListContainer';
//import Creator from '../Creator/Creator.js';
import Search from '../Search/SearchContainer';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  /*state = {
    lists: lists,
  }*/

  addList(title) {
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
            description: 'Your new description',
            image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
            columns: [],
          },
        ],
      }
    ));
  }

  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {/* this.state.lists.map(({key, ...listProps}) => (
          <List key={key} {...listProps} />
        ))*/}
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        {/*<Creator text={settings.listCreatorText} action={title => this.addList(title)} />*/}
      </main>
    );
  }
}

export default App;
