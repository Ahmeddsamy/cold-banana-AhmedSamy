import React from 'react';
import styles from './styles.module.scss';
import Button from '../button';
import backgroundImage from '../../../public/assests/heroBackground.svg';
import backgroundImage2 from '../../../public/assests/topRightHeader.svg';

const HeroSection: React.FC = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.background}>
                    <img src={backgroundImage} alt="background" />
                </div>
                <div className={styles.background2}>
                    <img src={backgroundImage2} alt="background" />
                </div>
                <div className={styles.heroSection}>
                    <h1>{'Lorem Ipsum Dolor Sit Amet.'.toUpperCase()}</h1>
                    <Button text="Read More" size="large" />
                </div></div>
        </>
    );
};

export default HeroSection;
