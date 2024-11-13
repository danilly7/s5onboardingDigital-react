import PropTypes from 'prop-types';
import styles from './Indicators.module.css';

export const IndicatorPrevious = ({ step, onPrevious }) => {
    const handleClickPreviousIndicator = () => {
        if (step !== undefined) {
            onPrevious(step);
        } else {
            onPrevious();
        }
    };

    return (
        <button className={styles.circleIndicator} onClick={handleClickPreviousIndicator}></button>
    );
};

IndicatorPrevious.propTypes = {
    onPrevious: PropTypes.func.isRequired,
    step: PropTypes.number,
};