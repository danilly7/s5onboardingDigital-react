import PropTypes from 'prop-types';
import styles from './Buttons.module.css';

export const ButtonNext = ({ onNext }) => {
    return (
        <button className={styles.buttonNext} onClick={onNext}>→</button>
    );
};

ButtonNext.propTypes = {
    onNext: PropTypes.func.isRequired,
};