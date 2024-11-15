import styles from './Card.module.css';
import { tutorialData } from "../data/tutorialData";
import { useState, useEffect } from 'react';
import { ButtonNext } from './ButtonNext';
import { ButtonPrevious } from './ButtonPrevious';
import { Indicator } from './Indicator';

export const Card = () => {
    const [step, setStep] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [currentStep, setCurrentStep] = useState(0);

    const handleClickNext = () => {
        setIsVisible(false);
        setTimeout(() => {
            setStep((prevStep) => (prevStep + 1) % tutorialData.length);
            setIsVisible(true);
        }, 500);
    };

    const handleClickPrevious = () => {
        setIsVisible(false);
        setTimeout(() => {
            setStep((prevStep) => {
                if (prevStep === 0) {
                    return tutorialData.length - 1;
                } else {
                    return (prevStep - 1) % tutorialData.length;
                }
            });
            setIsVisible(true);
        }, 500);
    };

    const goToStep = (stepIndex) => {
        setIsVisible(false);
        setTimeout(() => {
            setStep(stepIndex);
            setIsVisible(true);
        }, 500);
    };

    useEffect(() => {
        setCurrentStep(step);
    }, [step]);

    const currentCardData = tutorialData[currentStep];

    return (
        <section className={styles.card}>
            <div className={`${styles.cardContent} ${isVisible ? styles.visible : ''}`}>
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
            </div>
            <div className={styles.cardButtonsIndicatorsSection}>
                <div className={styles.cardIndicators}>
                    <Indicator totalSteps={tutorialData.length} currentStep={step} onIndicator={goToStep} />
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