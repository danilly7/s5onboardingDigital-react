import PropTypes from 'prop-types';
import styles from './Buttons.module.css';

export const Buttons = ({ onNext, onPrevious }) => {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.buttonPrev} onClick={onPrevious}>←</button>
            <button className={styles.buttonNext} onClick={onNext}>→</button>
        </div>
    );
};

Buttons.propTypes = {
    onNext: PropTypes.func.isRequired,
    onPrevious: PropTypes.func.isRequired,
};