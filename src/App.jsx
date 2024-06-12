import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SliderImage from "./components/SliderImage/SliderImage";
import AboutUs from "./components/AboutUs/AboutUs";
import Products from "./components/Products/Products";
import ContactUs from "./components/ContactUs/ContactUs";
import OurClients from "./components/OurClient/OurClients";
import Footer from "./components/Footer/Footer";
import whatsapp from './assets/whatsapp-icon.png'

const App = () => {
  const home = useRef();
  const aboutUs = useRef();
  const products = useRef();
  const contactUs = useRef();
  const ourClients = useRef();

  const scrollhandler = (elmRef) => {
    console.log(elmRef);
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "instant" });
  };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden",fontFamily:"Roboto" }}>
      <Navbar
        scrollhandler={scrollhandler}
        home={home}
        aboutUs={aboutUs}
        products={products}
        contactUs={contactUs}
        ourClients={ourClients}
      />
      <SliderImage home={home} />
      <AboutUs aboutUs={aboutUs} />
      <Products prRef={products} />
      <OurClients ourClients={ourClients} />
      <ContactUs contactUs={contactUs} />
      <Footer />
      <span className="help"><a href="https://www.whatsapp.com/"><img src={whatsapp} title="Whatsapp"/></a></span>
    </div>
  );
};

export default App;
