import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import styles from './List.scss';
import {settings} from '../../data/dataStore';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
//import Creator from '../Creator/Creator.js';

class List extends React.Component {
  /*state = {
    columns: this.props.columns || [],
  }*/

  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    columns: PropTypes.array,
    description: PropTypes.node,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  /*addColumn(title){
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  }*/

  render() {
    const {title, image, description, columns} = this.props;
    return (
      <section className={styles.component}>
        <Hero title={title} image={image}/>
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        {/*<div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>*/}
      </section>
    );
  }
}

export default List;
