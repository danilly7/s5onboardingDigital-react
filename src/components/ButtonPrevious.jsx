import PropTypes from 'prop-types';
import styles from './Buttons.module.css';

export const ButtonPrevious = ({ onPrevious }) => {
    return (
        <button className={styles.buttonPrevious} onClick={onPrevious}>←</button>
    );
};

ButtonPrevious.propTypes = {
    onPrevious: PropTypes.func.isRequired,
};