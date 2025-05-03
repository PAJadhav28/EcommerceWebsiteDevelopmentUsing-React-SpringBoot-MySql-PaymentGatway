import React, { useState } from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
// for left arrow icon
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { mens_kurta } from '../../../Data/mens_kurta';


const HomeSectionCarousel = ({data, sectionName}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
      0: { items: 1 },
      720: { items: 3 },
      1024: { items: 5.5},
    };

    //onClick next and previous this fun get called 
    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({item})=>setActiveIndex(item)
  
    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);
  
    return (
      <div className='border'>
        <h2 className='text-2xl font-extrabold text-gray-800 p-5'>{sectionName}</h2>
        <div className='relative p-5'>
            <AliceCarousel
            items={items}
            disableButtonsControls
            responsive = {responsive}
            disableDotsControls
            onSlideChanged={syncActiveIndex}
            activeIndex={activeIndex}
            />

            {/* next button */}
            {  activeIndex!== items.length-5 &&  <Button onClick={slideNext} variant="contained" className="z-50 bg-white" sx={{position:'absolute', top:"8rem", right:"0rem", transform:"translateX(50%) rotate(90deg)", bgcolor:"white", }} aria-label="next">
                    <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)", color:"black"}} />
                </Button>
            }

            {/* prev button */}
           {activeIndex!== 0 && <Button onClick={slidePrev} variant="contained" className="z-50 bg-white" sx={{position:'absolute', top:"8rem", left:"0rem", transform:"translateX(-50%) rotate(-90deg)", bgcolor:"white", }} aria-label="next">
                <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)", color:"black"}} />
            </Button>
            }

        </div>
      </div>
    );
  };

  export default HomeSectionCarousel;