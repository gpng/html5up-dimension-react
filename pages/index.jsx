import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import { config } from '@fortawesome/fontawesome-svg-core';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Articles from '../components/Articles';
// styles
// import '../css/fontawesome-all.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../public/css/main.css';

config.autoAddCss = false;

const delay = 0;

const Index = () => {
  const [preloaded, setPreloaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setPreloaded(true), 100);
  }, []);

  const [articleId, setArticleId] = useState(null);

  const [articleActive, setArticleActive] = useState(false);

  const handleClick = id => {
    if (id) {
      setArticleId(id);
      setTimeout(() => {
        setArticleActive(true);
      }, delay);
    } else {
      setArticleActive(false);
      setTimeout(() => {
        setArticleId(null);
      }, delay);
    }
  };

  return (
    <div
      className={classNames('root', {
        'is-preload': !preloaded,
        'is-article-visible': !!articleId,
      })}
    >
      <Head>
        <title>Dimension</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <noscript>
          <link rel="stylesheet" href="/css/noscript.css" />
        </noscript>
      </Head>
      <div id="wrapper">
        <Header onNavClick={handleClick} hidden={!!articleId} />
        <Articles displayId={articleId} active={articleActive} onClose={() => handleClick(null)} />
        <Footer />
      </div>
      <div id="bg" />
    </div>
  );
};

export default Index;
