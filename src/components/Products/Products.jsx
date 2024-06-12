import React from "react";
import style from "./Products.module.css";

const Products = ({ prRef }) => {
  return (
    <div className={style.main} ref={prRef}>
      <div className={style.heading}>
        <h2>Products</h2>
      </div>
      <div className={style.products}>
        {products.map((item) => {
          return (
            <div className={style.itemDiv} key={item.id}>
              <img
                style={{ width: "280px", height: "320px", cursor: "pointer" }}
                src={item.images}
              />
              <div
                style={{
                  width: "100%",
                  height: "50px",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  bottom: "1px",
                  padding: " 10px 25px 10px",
                  color: "white",
                }}
              >
                <h3>{item.heading}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

const products = [
  {
    id: 1,
    heading: "Paving Blocks",
    info: "",
    images: "https://www.paversindia.com/images/paving-blocks.jpg",
  },
  {
    id: 2,
    heading: "Landscaping Tiles",
    info: "",
    images: "https://www.paversindia.com/images/landscape-range.jpg",
  },
  {
    id: 3,
    heading: "Flagstones",
    info: "",
    images: "https://www.paversindia.com/images/flagstone-range.jpg",
  },
  {
    id: 4,
    heading: "Edgestones",
    info: "",
    images: "https://www.paversindia.com/images/edgestones.jpg",
  },
  {
    id: 5,
    heading: "Kerbstones",
    info: "",
    images: "https://www.paversindia.com/images/kerbstones.jpg",
  },
];
