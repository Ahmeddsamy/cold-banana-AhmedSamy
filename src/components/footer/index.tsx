import React from 'react';
import styles from './styles.module.scss';
import blobImage from '../../../public/assests/bottomLeftFooter.svg';
import telegramIcon from '../../../public/assests/telegram.svg';
import twitterIcon from '../../../public/assests/twitter.svg';
import facebookIcon from '../../../public/assests/facebook.svg';
import instagramIcon from '../../../public/assests/instgram.svg';
import youtubeIcon from '../../../public/assests/youtube.svg';
import tiktokIcon from '../../../public/assests/tiktok.svg';


const Footer: React.FC = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.blob}>
                <img src={blobImage} alt="Decorative Blob" />
            </div>
            <footer className={styles.footer}>
                <div className={styles.blobText}>
                    <h2>CHILLED GRAPE</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className={styles.links}>
                    <div className={styles.column}>
                        <h3>Company</h3>
                        <ul>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Our Work</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>Products</h3>
                        <ul>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Our Work</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>Follow Us</h3>
                        <div className={styles.icons}>
                            <img src={telegramIcon} alt="Telegram" />
                            <img src={twitterIcon} alt="Twitter" />
                            <img src={youtubeIcon} alt="YouTube" />
                            <img src={facebookIcon} alt="Facebook" />
                            <img src={instagramIcon} alt="Instagram" />
                            <img src={tiktokIcon} alt="TikTok" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;