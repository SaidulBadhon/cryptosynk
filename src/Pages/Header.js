import React from 'react';
import "./Styles.css";

import Logo from '../Images/logo.png'
import { Button } from '@material-ui/core';

function Header() {
  return (
    <div className="Header">
        <div className="Logo">
            <img src={Logo} alt="cryptosynk Logo"/>

        </div>
        <nav>
          <ul>
              <li><Button >Services</Button></li>
              <li><Button>Technologies</Button></li>
              <li><Button>Contact</Button></li>
          </ul>
        </nav>
    </div>
  );
}

export default Header;
