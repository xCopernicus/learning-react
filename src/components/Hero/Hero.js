import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import styles from './Hero.scss';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.title)}</h2>
    <img className={styles.image} src={props.image} />
  </header>
);

Hero.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};

export default Hero;
