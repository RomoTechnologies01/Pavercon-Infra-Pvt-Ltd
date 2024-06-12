import React from "react";
import style from "./ContactUs.module.css";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";

const ContactUs = ({ contactUs }) => {
  return (
    <div className={style.main} ref={contactUs}>
      <div className={style.left}>
        <div className={style.inner}>
          <h2>Get in Touch - We're Here to Help</h2>
          <div className={style.input}>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Mobile No" />
            <textarea
              className={style.textarea}
              type="text"
              placeholder="Enter Your Message"
            />
            <button>Contact Us</button>
          </div>
          <div className={style.smHeading}>
            <h2>Follow Us On</h2>
          </div>

          <div className={style.socialMedia}>
            <a href="https://www.facebook.com/">
              <FaFacebook className={style.Flogo} />
            </a>

            <a href="https://www.instagram.com/">
              <IoLogoInstagram className={style.Ilogo} />
            </a>

            <IoLogoTwitter className={style.Tlogo} />
          </div>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.rightBox}>
          <div>
            <img
              className={style.logo}
              src="https://omconcreteproducts.com/assets/icons/map.png"
              alt=""
            />
          </div>
          <div className={style.adderss}>
            <h4>Corporate Office</h4>
            <div style={{ paddingTop: "10px" }}>
              <p>
                <strong>Address :</strong>
              </p>
            </div>
          </div>
        </div>
        <div className={style.emailBox}>
          <div>
            <img
              className={style.logo}
              src="https://omconcreteproducts.com/assets/icons/email.png"
              alt=""
            />
          </div>
          <div className={style.email}>
            <h4>Email us</h4>
            <div style={{ paddingTop: "10px" }}>
              <p></p>
            </div>
          </div>
        </div>
        <div className={style.callBox}>
          <div>
            <img
              className={style.logo}
              src="	https://omconcreteproducts.com/assets/icons/call.png"
              alt=""
            />
          </div>
          <div className={style.call}>
            <h4>Call us</h4>
            <div style={{ paddingTop: "10px" }}>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
