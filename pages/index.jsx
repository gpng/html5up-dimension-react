import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { config } from '@fortawesome/fontawesome-svg-core';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Articles from '../components/Articles';
// styles
// import '../css/fontawesome-all.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../css/main.css';
import '../css/noscript.css';

config.autoAddCss = false;

const Index = () => {
  const [preloaded, setPreloaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setPreloaded(true), 100);
  }, []);

  const [articleId, setArticleId] = useState(null);

  return (
    <div
      className={classNames('root', {
        'is-preload': !preloaded,
      })}
    >
      <div id="wrapper">
        {!articleId && <Header onNavClick={setArticleId} />}
        <Articles displayId={articleId} onClose={() => setArticleId(null)} />
        <Footer />
      </div>
      <div id="bg" />
    </div>
  );
};

export default Index;
