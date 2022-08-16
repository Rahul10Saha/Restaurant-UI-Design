import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">ALL-NEW POLO ASADO</h1>
      <p className="p__opensans" style={{ margin: '3rem 0' }}>A fresh new flavor of chicken is hitting the grill, made with garlic, guajillo peppers, and fresh lime</p>
      <a href="#menu" type="button" className="custom__button"> Explore Menu </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
