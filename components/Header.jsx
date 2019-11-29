import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onNavClick }) => {
  return (
    <header id="header">
      <div className="logo">
        <span className="icon">
          <FontAwesomeIcon icon={faGem} />
        </span>
      </div>
      <div className="content">
        <div className="inner">
          <h1>Dimension</h1>
          <p>
            A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a>{' '}
            and released
            <br />
            for free under the <a href="https://html5up.net/license">Creative Commons</a> license.
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <button type="button" onClick={() => onNavClick('intro')}>
              Intro
            </button>
          </li>
          <li>
            <button type="button" onClick={() => onNavClick('work')}>
              Work
            </button>
          </li>
          <li>
            <button type="button" onClick={() => onNavClick('about')}>
              About
            </button>
          </li>
          <li>
            <button type="button" onClick={() => onNavClick('contact')}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  onNavClick: PropTypes.func.isRequired,
};

export default Header;
