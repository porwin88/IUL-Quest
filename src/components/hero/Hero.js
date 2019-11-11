import React from 'react';

import './hero.css';
import hero from '../../assets/iul-hero.jpg';

export default function Hero () {
  return (
    <div className="hero" data-test="component-hero">
      <img src={hero} alt="hero" id="hero" />
    </div>
  )
}
