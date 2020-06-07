import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="navi">
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="logo">🎦</div>
    </div>
  );
}

export default Navigation;
