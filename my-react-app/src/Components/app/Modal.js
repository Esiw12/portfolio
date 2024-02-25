import React, { useState } from 'react';
import styles from '../../Style/index/modal.module.css';
import krestImage from '../../image/krestik.png';

const Modal = ({ isOpen, onClose }) => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const handleToggle = () => {
    setIsLoginActive(!isLoginActive);
  };

  return isOpen ? (
    <>
      <div className={styles.modalBackground} onClick={onClose}></div>
      <div className={styles.modal}>
        <div className={styles.wrapper}>
          <div className={styles.cardSwitch}>
            <label className={styles.switch}>
              <input 
                className={styles.toggle} 
                type="checkbox" 
                checked={isLoginActive} 
                onChange={handleToggle} 
              />
              <span className={styles.slider}></span>
              <div className={styles.cardSideLogIn}>Log in</div>
              <div className={styles.cardSideSignUp}>Sign up</div>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <div className={styles.circleModalFront}></div>
                  <button onClick={onClose} className={styles.closeModal}>
                    <img className={styles.krest} src={krestImage} alt="Закрыть" />
                  </button>
                  <div className={styles.title}>Log in</div>
                  <form action="/routes/userRouter/login" method="POST" className={styles.flipCardForm}>
                    <input type="email" placeholder="Email" name="email" className={styles.flipCardInput} />
                    <input type="password" placeholder="Password" name="password" className={styles.flipCardInput} />
                    <button type="submit" className={styles.flipCardBtn}>Let`s go!</button>
                  </form>
                </div>
                <div className={styles.flipCardBack}>
                  <div className={styles.circleModalBack}></div>
                  <button onClick={onClose}>
                    <img className={styles.krest} src={krestImage} alt="Close" />
                  </button>
                  <div className={styles.title}>Sign up</div>
                  <form className={styles.flipCardForm}>
                    <input type="text" placeholder="Name" name="username" className={styles.flipCardInput} />
                    <input type="email" placeholder="Email" name="email" className={styles.flipCardInput} />
                    <input type="password" placeholder="Password" name="password" className={styles.flipCardInput} />
                    <button type="submit" className={styles.flipCardBtn}>Confirm!</button>
                  </form>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Modal;
