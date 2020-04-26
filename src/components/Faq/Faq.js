import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const Faq = ({title, image, content}) => (
  <Container>
    <Hero title={title} image={image}/>
    {ReactHtmlParser(content)}
  </Container>
);

Faq.propTypes = {
  title: PropTypes.node,
  image: PropTypes.string,
  content: PropTypes.node,
};

export default Faq;
