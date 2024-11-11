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
        <section className={styles.cardSection}>
            <div className={styles.card}>
                <img
                    className={styles.cardImage}
                    src={currentCardData.image}
                    alt={currentCardData.alt}
                    style={{ backgroundColor: currentCardData.bgColor }}
                />
                <div className={styles.cardTitle}>
                    <strong>{currentCardData.title}</strong>
                </div>
                <div className={styles.cardInfo}>
                    <span>{currentCardData.description}</span>
                </div>
            </div>

            <Buttons onNext={handleClickNext} onPrevious={handleClickPrevious} />

        </section>
    );
};