import styles from './Card.module.css';
import { tutorialData } from "../data/tutorialData";
import { useState } from 'react';
import { ButtonNext } from './ButtonNext';
import { ButtonPrevious } from './ButtonPrevious';
import { Indicator } from './Indicators';

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

            <div className={styles.cardButtonsIndicatorsSection}>
                <div className={styles.cardIndicators}>
                    <Indicator totalSteps={tutorialData.length} currentStep={step} />
                </div>
                <div className={styles.cardButtons}>
                    {step === 0 ? (
                        <ButtonNext onNext={handleClickNext} />
                    ) : step === 1 ? (
                        <>
                            <ButtonPrevious onPrevious={handleClickPrevious} />
                            <ButtonNext onNext={handleClickNext} />
                        </>
                    ) : (
                        <ButtonPrevious onPrevious={handleClickPrevious} />
                    )}
                </div>
            </div>
        </section >
    )
};