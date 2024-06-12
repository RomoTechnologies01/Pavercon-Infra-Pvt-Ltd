import React from "react";

const OurClients = ({ourClients}) => {
  return (
    <div ref={ourClients}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "30px 50px",
        backgroundColor: "#e8eaee" ,
      }}
    >
      <h1>Our Clients</h1>
      <div
        style={{
          height: "30vh",
          width: "100%",
          boxShadow: "-3px 4px 24px 1px #BFBFBF",
          margin: "20px 10px",
          backgroundColor:"#fff"
        }}
      ></div>
    </div>
  );
};

export default OurClients;
