import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Article = ({ children, active, hidden, onClose }) => {
  return (
    <article
      className={classNames({
        active,
        hidden,
      })}
    >
      <button type="button" className="close" onClick={onClose}>
        Close
      </button>
      {children}
    </article>
  );
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  hidden: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Article;
