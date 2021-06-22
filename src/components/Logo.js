import React from 'react';
import LogoImg from '../assets/images/logo.png';

const Logo = (props) => (
  <img
    alt="Logo"
    src={LogoImg}
    width="55"
    height="55"
    style={{ marginTop: '2px' }}
    {...props}
  />
);

export default Logo;
