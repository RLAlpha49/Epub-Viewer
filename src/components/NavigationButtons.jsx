import PropTypes from 'prop-types';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

/**
 * Renders navigation buttons for next and previous actions
 * @param {function} onNext - Function to be called when the next button is clicked
 * @param {function} onPrev - Function to be called when the previous button is clicked
 * @returns {JSX.Element} A div containing two buttons with arrow icons for navigation
 */
function NavigationButtons({ onNext, onPrev }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <Button onClick={onPrev}>
        <ArrowLeft />
      </Button>
      <Button onClick={onNext}>
        <ArrowRight />
      </Button>
    </div>
  );
}

NavigationButtons.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default NavigationButtons;