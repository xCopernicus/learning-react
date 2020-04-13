import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import styles from './Card.scss';

const Card = props => (
  <section className={styles.component}>
    {ReactHtmlParser(props.title)}
  </section>
);

Card.propTypes = {
  title: PropTypes.node,
};

export default Card
