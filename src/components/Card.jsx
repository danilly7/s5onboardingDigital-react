import styles from './Card.module.css';
import { tutorialData } from "../data/tutorialData";
import { useState } from 'react';
import { ButtonNext } from './ButtonNext';
import { ButtonPrevious } from './ButtonPrevious';
import { IndicatorCurrent } from './IndicatorCurrent';
import { IndicatorNext } from './IndicatorNext';
import { IndicatorPrevious } from './IndicatorPrevious';

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

            {step === 0 ? (
                <div className={styles.cardButtonsIndicatorsSection}>
                    <div className={styles.cardIndicators}>
                        <IndicatorCurrent />
                        <IndicatorNext onNext={handleClickNext} />
                        <IndicatorNext step={2} onNext={handleClickNext} />
                    </div>
                    <div className={styles.cardButtons}>
                        <ButtonNext onNext={handleClickNext} />
                    </div>
                </div>
            ) : step === 1 ? (
                <div className={styles.cardButtonsIndicatorsSection}>
                    <div className={styles.cardIndicators}>
                        <IndicatorPrevious onPrevious={handleClickPrevious} />
                        <IndicatorCurrent />
                        <IndicatorNext onNext={handleClickNext} />
                    </div>
                    <div className={styles.cardButtons}>
                        <ButtonPrevious onPrevious={handleClickPrevious} />
                        <ButtonNext onNext={handleClickNext} />
                    </div>
                </div>
            ) : (
                <div className={styles.cardButtonsIndicatorsSection}>
                    <div className={styles.cardIndicators}>
                        <IndicatorPrevious step={0} onPrevious={handleClickPrevious} />
                        <IndicatorPrevious onPrevious={handleClickPrevious} />
                        <IndicatorCurrent />
                    </div>
                    <div className={styles.cardButtons}>
                        <ButtonPrevious onPrevious={handleClickPrevious} />
                    </div>
                </div>
            )}
        </section >
    );
};