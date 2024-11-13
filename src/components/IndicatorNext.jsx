import PropTypes from 'prop-types';
import styles from './Indicators.module.css';

export const IndicatorNext = ({ step, onNext }) => {
    const handleClickNextIndicator = () => {
        if (step !== undefined) {
            onNext(step);
        } else {
            onNext();
        }
    };

    return (
        <button className={styles.circleIndicator} onClick={handleClickNextIndicator}></button>
    );
};

IndicatorNext.propTypes = {
    onNext: PropTypes.func.isRequired,
    step: PropTypes.number,
};