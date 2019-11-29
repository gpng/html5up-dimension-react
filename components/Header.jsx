import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onNavClick, hidden }) => {
  return (
    <header id="header" className={classNames({ hidden })}>
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
      <nav className="use-middle">
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
          <li className="is-middle">
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

Header.defaultProps = {
  hidden: false,
};

Header.propTypes = {
  onNavClick: PropTypes.func.isRequired,
  hidden: PropTypes.bool,
};

export default Header;
