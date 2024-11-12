import styles from './Card.module.css';
import { tutorialData } from "../data/tutorialData";
import { useState } from 'react';
import { Buttons } from "./Buttons";


export const Card = () => {

    const [step, setStep] = useState(0);

    const handleClickNext = () => {
        setStep((prevStep) => (prevStep + 1) % tutorialData.length);
    };

    const handleClickPrevious = () => {
        setStep((prevStep) => {
            if (prevStep === 0) {
                return tutorialData.length - 1;
            } else {
                return (prevStep - 1) % tutorialData.length;
            }
        });
    };

    const currentCardData = tutorialData[step];
    console.log("card current", currentCardData);

    return (
        <section className={styles.card}>
            <div className={styles.cardImageSection}>
                <img
                    className={styles.cardImage}
                    src={currentCardData.image}
                    alt={currentCardData.alt}
                    style={{ backgroundColor: currentCardData.bgColor }}
                />
            </div>
            <div className={styles.cardTextSection}>
                <div className={styles.cardTitle}>
                    <strong>{currentCardData.title}</strong>
                </div>
                <div className={styles.cardInfo}>
                    <span>{currentCardData.description}</span>
                </div>
            </div>
            <div className={styles.cardButtonsSection}>
                <div className={styles.cardIndicators}>
                <p>Indicators</p>
                </div>
                <div className={styles.cardButtons}>
                    <Buttons onNext={handleClickNext} onPrevious={handleClickPrevious} />
                </div>
            </div>



        </section>
    );
};