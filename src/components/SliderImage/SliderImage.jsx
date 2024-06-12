import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import style from './sliderImage.module.css'
const SliderImage = ({home}) => {
  const [imageNum, setImageNum] = useState(1);
  
  return (
    <div className={style.main} ref={home}>
      <SimpleImageSlider 
      className={style.slider}
        width="90%"
        height="35vmax"
        images={sliderImages}
        showBullets={true}
        autoPlay={true}
        onStartSlide={(index, length) => {
          setImageNum(index);
        }}
        autoPlayDelay={3}
        
      />
    </div>
  );
};

export default SliderImage;

const sliderImages = [
  {
    url: "https://imgs.search.brave.com/4p501nMryVkiVWyqzaEvdxB0Ma8rNJ1GJtdq5RAARaM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzcwLzMyLzM5/LzM2MF9GXzE3MDMy/Mzk4MV96T3RYamxu/YW5LeXppd25yQ0JY/Y1RrblczSTJaNENa/dS5qcGc",
  },
  {
    url: "https://media.istockphoto.com/id/1297586417/photo/paver-brick-floor-in-perspective-view-for-background.jpg?s=612x612&w=0&k=20&c=I1ojUugjNiCd0wnujgQzwsx2mMLOkWo3bVsruP-96JI=",
  },
  {
    url: "https://www.paversindia.com/images/banner1.jpg",
  },
  {
    url: "https://img.freepik.com/free-photo/outdoors-cobblestone-texture-with-grass_23-2149432972.jpg?size=626&ext=jpg",
  },
  {
    url: "https://imgs.search.brave.com/1rc_UYSY29RTV8oBSJTLK9-umj2LKCGzUWhLvEkgYqc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93ZXN0/ZXJuaW50ZXJsb2Nr/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wNy9ob3ct/dG8taW5zdGFsbC1w/ZXJtZWFibGUtcGF2/ZXJzLWlkZWEtYm94/LTI0LTEwMjR4NTc2/LmpwZw",
  },
];

