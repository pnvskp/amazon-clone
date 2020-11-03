import React from "react";
import Product from "./Product";
import "../CSS/home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="banner">
          <img
            className="banner-img"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase2/v1/Phase2_Unrec_PC_Hero_1x._CB417682744_.jpg"
            alt="Banner"
          />
        </div>
        <div className="home-row">
          <Product
            id="4197416"
            title="Atomic Habits"
            price={532}
            image="https://m.media-amazon.com/images/I/91JHJgPh6LL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="1242153"
            title="Lenovo Legion 5i 10th Gen Intel Core i5 15.6 inch Full HD Gaming Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/120 Hz/NVIDIA GTX 1650 4GB GDDR6 Graphics/Phantom Black/2.3Kg)"
            price={72990}
            rating={4}
            image="https://m.media-amazon.com/images/I/61p3lA4N3uL._AC_UY218_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="6325143"
            title="All-new Echo Dot (4th Gen) with clock | Next generation smart speaker with powerful bass, LED display and Alexa (Blue)"
            price={4249}
            image="https://images-na.ssl-images-amazon.com/images/I/61u0y9ADElL._SL1000_.jpg"
            rating={4}
          />
          <Product
            id="8790098"
            title="OnePlus 8T 5G (Lunar Silver, 8GB RAM, 128GB Storage)"
            price={42999}
            image="https://m.media-amazon.com/images/I/71m05O2uNdL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="1264916"
            title="Sony WH-1000XM4 Industry Leading Wireless Noise Cancelling Headphones, Bluetooth Headset with Mic for Phone Calls-(Black)"
            price={26990}
            rating={4}
            image="https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UY218_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="3874551"
            title="Samsung 163 cm (65 inches) Q Series QA65Q8CNAK 4K LED Smart TV (Black)"
            price={258990}
            image="https://images-eu.ssl-images-amazon.com/images/I/5151wjW64dL._AC_US160_FMwebp_QL70_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
