import React from 'react';
import Slider from 'react-slick';
 import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";
// import { colors } from '@mui/material';
// import { WiDayLightWind } from 'react-icons/wi';
// import { GiWhiteBook } from 'react-icons/gi';

const SlideImages = () => {
  const images = ['https://img.freepik.com/premium-vector/global-money-transfer-via-banking-application-smartphone-globe-smart-device-online-connecting_251139-248.jpg?w=996',
    'https://www.icicibank.com/content/dam/icicibank/india/managed-assets/images/credit-card/international-launge-access.webp',
    'https://www.iifl.com/files/iifl_insights/images/Business-loan-Meaning,-types-and-how-to-apply-750.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRv3sBxEWO4vi-gQNrt6acCFDjMoW8mCS9Tw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSykAgjHsliTHarJssdgJOuBNkD57oNrigTAg&usqp=CAU'
    
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,  // 2000 milliseconds for a 2-second interval
    cssEase: 'linear',    
    pauseOnHover: false,
    arrows: true
  };

  return (
    <div>
    
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Moving Image ${index + 1}`} style={{ width: '330px', height: '150px' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideImages;
