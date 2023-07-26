import React, { useState, useEffect, useRef } from "react";
import "../Slider/slider.scss";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Slider from "@mui/material/Slider";

export default function CustomSlider({ items }) {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);

  const cacheImages = useRef({});

  const handleSelect = (event, selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    if (items.length > 0) {
      const itemId = items[index].zpid;
      if (cacheImages.current[itemId]) {
        console.log("using from cache");
        setImages(cacheImages.current[itemId]);
      } else {
        const options = {
          method: "GET",
          url: "https://zillow-com1.p.rapidapi.com/images",
          params: { zpid: `${itemId}` },
          headers: {
            "X-RapidAPI-Key":
              "da86316bdcmsh9b607f3eb67c004p10dbbfjsnd18353baa41d",
            "X-RapidAPI-Host": "zillow-com1.p.rapidapi.com",
            "Content-Type": "application/json",
          },
        };

        axios
          .request(options)
          .then(function (response) {
            console.log("using from request");
            setImages(response.data.images);
            cacheImages.current[itemId] = response.data.images;
          })
          .catch(function (error) {
            console.error(error);
          });
      }
    }
  }, [index, items]);

  return (
    <>
      {items && images && (
        <>
          <section className="slider">
            <div
              className="slider-header"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className="slider-header__title">
                {items.streetAddress} , {element.resoFacts.cityRegion}
              </p>
            </div>
            <Slider
              aria-label="apartment-carousel"
              value={index}
              onChange={handleSelect}
              max={images.length - 1}
              valueLabelDisplay="on"
              valueLabelFormat={(value) => value + 1}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${index}`}
                  style={{ objectFit: "cover", height: "400px" }}
                />
              ))}
            </Slider>

            <div
              className="buttonHolder"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 0",
              }}
            >
              <Link style={{ textDecoration: "none" }} to={"/mapPage"}>
                <PriceButton
                  variant="contained"
                  className="button"
                  style={{ fontWeight: "800" }}
                >
                  {element.price} CAD
                </PriceButton>
              </Link>
            </div>
            <section>
              <h3 style={{ borderBottom: "1px solid grey", padding: "1rem 0" }}>
                Facts and features
              </h3>

              <p style={{ fontSize: 18 }}>
                Living area: {element.livingArea} {element.livingAreaUnits}
              </p>
              <p> Description: {element.description}</p>
              {element.resoFacts.atAGlanceFacts
                .filter((fact) => fact.factValue)
                .map((fact) => (
                  <p>
                    {fact.factLabel}: {fact.factValue}
                  </p>
                ))}
              <p>Date posted: {element.datePosted}</p>
            </section>
          </section>
        </>
      )}
    </>
  );
}
