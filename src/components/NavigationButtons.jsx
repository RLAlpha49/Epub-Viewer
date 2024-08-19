import { Button } from './ui/button.jsx';

function NavigationButtons({ onNext, onPrev }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <Button onClick={onPrev}>Previous</Button>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
}

export default NavigationButtons;