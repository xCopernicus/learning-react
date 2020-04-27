import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import styles from './SearchResults.scss';

const SearchResults = ({title, icon, cards}) => (
  <section className={styles.component}>
    <h3 className={styles.title}>{title}
      <span className={styles.icon}>
        <Icon name={icon} />
      </span>
    </h3>
    {cards.map(cardData => (
      <Card key={cardData.id} {...cardData} />
    ))}
  </section>
);

SearchResults.propTypes = {
  cards: PropTypes.array,
  title: PropTypes.node,
  icon: PropTypes.string,
};

export default SearchResults;
