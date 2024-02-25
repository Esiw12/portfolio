import React from 'react';
import styles from '../../Style/index/footer.module.css';
import logoImage from '../../image/krevetka.png';
import tgImage from '../../image/TG.png';
import vkImage from '../../image/VK.png';
import youtubeImage from '../../image/you.png';
import whatsappImage from '../../image/what.png';
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <a href="#"><img className={styles.iconLogo} src={logoImage} alt="Logo" /></a>
      </div>
      <div className={styles.footerInformation}>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />Aenean commodo ligula eget dolor. Aenean massa.
          <br />Cum sociis natoque penatibus et magnis dis parturient.
        </p>
      </div>
      <div className={styles.footerSocial}>
        <div className={styles.socialIcons}>
          <a href="https://t.me/esiw_yar"><img className={styles.forum} src={tgImage} alt="Telegram" /></a>
          <a href="https://vk.com/esiw_yar"><img className={styles.forum} src={vkImage} alt="VK" /></a>
          <a href="#"><img className={styles.forum} src={youtubeImage} alt="YouTube" /></a>
          <a href="#"><img className={styles.forum} src={whatsappImage} alt="WhatsApp" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
