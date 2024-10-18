import React from 'react';
import styles from './styles.module.scss';
import Button from '../button';
import plantImage from '../../../public/assests/middleSection.svg';

const MiddleSection: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textSection}>
                <h1>Lorem Ipsum Dolor Sit Amet.</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.        </p>
                <Button text="Read More" size="small" />
            </div>
            <div className={styles.imageSection}>
                <img src={plantImage} alt="Plant" />
            </div>
        </div>
    );
};

export default MiddleSection;

