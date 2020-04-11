import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    backgroundLink: PropTypes.string,
    titleColumn: PropTypes.array,
  }

  static defaultProps = {
    children: <p>I can do all the things!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero title={this.props.title} backgroundLink={this.props.backgroundLink}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title={this.props.titleColumn[0]} />
          <Column title={this.props.titleColumn[1]} />
          <Column title={this.props.titleColumn[2]} />
        </div>
      </section>
    )
  }
}

export default List;
