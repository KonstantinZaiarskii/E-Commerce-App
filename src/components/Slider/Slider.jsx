import {React, useState} from 'react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import './Slider.scss';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    'https://images.unsplash.com/photo-1669628745218-5b077d2bac97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1669672343616-40364c2245ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1669570094762-828f3dfaf675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1600&q=60',
  ];

  const prevSlide = () => {
    setCurrentSlide( currentSlide === 0 ? 2 : prev => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : prev => prev + 1);
  };

  return (
    <div className='slider'>
      <div
        className='slider_container'
        style={{transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt='img' />
        <img src={data[1]} alt='img' />
        <img src={data[2]} alt='img' />
      </div>
      <div className='icons'>
        <div className='icon' onClick={prevSlide}>
          <WestIcon />
        </div>
        <div className='icon' onClick={nextSlide}>
          <EastIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
