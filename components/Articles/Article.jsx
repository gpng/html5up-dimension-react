import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Article = ({ children, id, displayId, active, onClose }) => {
  return (
    <article
      className={classNames({
        active: active && displayId === id,
        hidden: displayId !== id,
      })}
    >
      <button type="button" className="close" onClick={onClose}>
        Close
      </button>
      {children}
    </article>
  );
};

Article.defaultProps = {
  displayId: null,
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  displayId: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Article;
