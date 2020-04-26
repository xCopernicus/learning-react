import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore';

const Header = () => (
  <header className={styles.component}>
    <Container>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to='/'>
          <Icon name={settings.header.logo} />
        </Link>
        <nav>
          <NavLink activeClassName='active' exact to='/'>Home</NavLink>
          <NavLink activeClassName='active' exact to='/info'>Info</NavLink>
          <NavLink activeClassName='active' exact to='/faq'>FAQ</NavLink>
        </nav>
      </div>
    </Container>
  </header>
);

export default Header;
