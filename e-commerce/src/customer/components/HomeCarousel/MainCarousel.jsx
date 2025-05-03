import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

// To iterate over an images to dispay on screen
const items = mainCarouselData.map((item) => <img className='cursor-pointer' role='presentation' src={item.image} alt='' />)

const MainCarousel = () => (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        infinite
        autoPlayInterval={1000}
    />
);

export default MainCarousel;