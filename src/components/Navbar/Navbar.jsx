import React, { useState } from "react";
import style from './Navbar.module.css'
import { TiThMenu } from "react-icons/ti";

const Navbar = ({scrollhandler, home, aboutUs, products, contactUs, ourClients}) => {


  return (
    <div className={style.main}>
      <div className={style.logo}>
        <h1>Logo</h1>
      </div>
      <div className={style.ulList}>
        <ul className={style.ul}>
          <li onClick={()=> scrollhandler(home)}>Home</li>
          <li onClick={()=> scrollhandler(aboutUs)}>About Us</li>
          <li onClick={()=> scrollhandler(products)}>Products</li>
          <li onClick={()=> scrollhandler(contactUs)}>Contact Us</li>
          <li onClick={()=> scrollhandler(ourClients)}>Our Clients</li>
        </ul>
      </div>
      <TiThMenu className={style.menuIcon}></TiThMenu>
    </div>
  );
};

export default Navbar;
