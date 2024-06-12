import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.main}>
      <div className={style.footerMain}>
        <h1>Footer</h1>
      </div>
      <div className={style.bottomDiv}>
        <div className={style.left}>
          © 2021 Pevercon Infra Pvt Ltd | Copyrights Reserved
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
