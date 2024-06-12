import React from "react";
import style from "./AboutUs.module.css";
import { SlGrid } from "react-icons/sl";

const AboutUs = ({ aboutUs }) => {
  return (
    <div ref={aboutUs} className={style.main}>
      <div className={style.left}>
        <span className={style.heading}>
        <SlGrid className={style.icon}/>
          <h3>About Us</h3>
        </span>
        <h1>About Pavercon Infra Pvt Ltd - Quality, And Product</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ducimus itaque expedita praesentium veniam recusandae blanditiis voluptatem quidem molestiae doloremque.</p>
      </div>
      <div className={style.right}></div>
    </div>
  );
};

export default AboutUs;
