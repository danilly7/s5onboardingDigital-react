import PropTypes from 'prop-types';
import styled from 'styled-components';

const IndicatorWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Circle = styled.div`
  width: ${({ isActive }) => (isActive ? '17px' : '10px')};;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? 'black' : 'grey')};
  cursor: ${({ isActive }) => (isActive ? '' : 'pointer')};;
  transition: background-color 0.3s ease;
`;

export const Indicator = ({ totalSteps, currentStep }) => {

    const steps = Array.from({length: totalSteps}, (_,index) => index);

    return(
        <IndicatorWrapper>
            {steps.map((stepIndex)=>(
                <Circle
                key={stepIndex}
                isActive={stepIndex=== currentStep} 
                />
            ))}
        </IndicatorWrapper>
    );
};

Indicator.propTypes = {
    totalSteps: PropTypes.number,
    currentStep: PropTypes.number,
};