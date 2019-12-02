import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';

const links = ['intro', 'work', 'about', 'contact', 'elements'];

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
      <nav className={classNames({ 'use-middle': links.length % 2 === 0 })}>
        <ul>
          {links.map((x, i) => (
            <li key={x} className={classNames({ 'is-middle': i > 0 && i % 2 === 0 })}>
              <button type="button" onClick={() => onNavClick(x)}>
                {x}
              </button>
            </li>
          ))}
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
