import React from 'react';
import styles from '../../Style/index/main.module.css'; 
import jsImage from '../../image/plaid 1.png'; 
import cSharpImage from '../../image/plaid 2.png'; 
import pytImage from '../../image/plaid 3.png'; 
function MainContent() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.mainText}>
          <div className={styles.textZagolovok}>
          <p>
            <b>Дорогой друг, мы рады </b><br />
            видеть тебя здесь!
          </p>
        </div>
        <div className={styles.textInformation}>
          <p>
            Наша команда разработчиков<br />
            создала данный сайт для того,<br />
            чтобы тебе было легче учить<br />
            языки программирования.
          </p>
        </div>
        <div className={styles.textInformation}>
          <p>
            Обучение будет проходить в<br />
            игровом формате, для того<br />
            чтобы начать игру:
          </p>
        </div>
        <div className={styles.textInformation}>
          <p>
            Скорее жми на любой<br />
            язык программирования<br />
            который привлек тебя<br />
            больше всего.
          </p>
        </div>
      </div>
      <div className={styles.sideImages}>
          <div className={styles.topImages}>
            <a href="lvl.html"><img className={styles.js} src={jsImage} alt="JavaScript" /></a>
            <div className={styles.spacer}></div>
            <a href="lvl.html"><img className={styles.cSharp} src={cSharpImage} alt="C#" /></a>
          </div>
          <a href="lvl.html"><img className={styles.pyt} src={pytImage} alt="Python" /></a>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
