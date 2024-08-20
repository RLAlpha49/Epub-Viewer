import PropTypes from 'prop-types';
import { Button } from './ui/button.jsx';

function NavigationButtons({ onNext, onPrev }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <Button onClick={onPrev}>Previous</Button>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
}

NavigationButtons.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default NavigationButtons;