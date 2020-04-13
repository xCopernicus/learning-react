import React from 'react';
import styles from './App.scss';
import {settings, pageContents, listData, lists} from '../../data/dataStore.js';
import List from '../List/List.js';
import Creator from '../Creator/Creator.js';

class App extends React.Component {
  state = {
    lists: lists,
  }

  addList(title){
    console.log('test');
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
            description: 'Your new description',
            image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
            columns: []
          }
        ]
      }
    ));
  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        {this.state.lists.map(({key, ...listProps}) => (
          <List key={key} {...listProps} />
        ))}
        <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
      </main>
    )
  }
}

export default App;
