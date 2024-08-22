import PropTypes from 'prop-types';
import { Button } from './shadcn/ui/button.jsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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