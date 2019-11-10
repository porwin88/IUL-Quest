import React from 'react';

import './header.css';
import logo from '../../assets/iul-logo.png';

export default function Header() {
  return (
    <div className="header">
    <img src={logo} alt="IUL logo" id="logo" />
    <div>LINNEA ANDERSSON || FRONTEND DEVELOPER</div>
    </div>
  )
}
