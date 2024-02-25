import React from 'react';
import styles from '../../Style/index/header.module.css';
import krevetkaImage from '../../image/krevetka.png';
import spravImage from '../../image/sprav.png';
import forumImage from '../../image/forum.png';
import logImage from '../../image/log.png';

function Header({ openModal }) { 
  return (
    <header className={styles.header}>
      <div className={styles.headContent}>
        <a href="/">
          <img className={styles.forum} src={krevetkaImage} alt="Logo" />
        </a>
        <p className={styles.headContentP}>Crystal Tech</p>
      </div>
      <div className={styles.infoGuide}>
        <a className={styles.infoGuideA} href="/sprav.html">
          <img src={spravImage} alt="Справка" />
        </a>
        <a className={styles.infoGuideA} href="/forum.html">
          <img src={forumImage} alt="Форум" />
        </a>
        <button className={styles.infoGuideA} onClick={openModal}>
        <img src={logImage} alt="Login" />
        </button>
      </div>
    </header>
  );
}

export default Header;
