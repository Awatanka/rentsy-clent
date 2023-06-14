import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Slider/slider.scss";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Slider({ element }) {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState();

  const cacheImages = useRef({});

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const BootstrapButton = styled(Button)({
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    textTransform: "none",
    fontSize: 16,
    width: "150px",
    height: "50px",
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    color: "black",
    backgroundColor: "#ffd500",
    borderColor: "grey",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "grey",
      borderColor: "#ffd500",
      color: "white",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  const itemId = element.zpid;
  const options = {
    method: "GET",
    url: "https://zillow-com1.p.rapidapi.com/images",
    params: { zpid: `${itemId}` },
    headers: {
      "X-RapidAPI-Key": "da86316bdcmsh9b607f3eb67c004p10dbbfjsnd18353baa41d",
      "X-RapidAPI-Host": "zillow-com1.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    if (cacheImages.current[itemId]) {
      console.log("useg from cache");
      setImages(cacheImages.current[itemId]);
    } else {
      axios
        .request(options)
        .then(function (response) {
          console.log("useg from request");
          setImages(response.data.images);
          cacheImages.current[itemId] = response.data.images;
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [images, element]);

  return (
    <>
      {element && images && (
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
                {element.streetAddress} , {element.resoFacts.cityRegion}
              </p>
            </div>

            <Carousel fade>
              {images.map((image) => (
                <Carousel.Item>
                  <img className="d-block w-100" src={image} alt="apartment" />
                </Carousel.Item>
              ))}
            </Carousel>
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
                <BootstrapButton
                  variant="contained"
                  className="button"
                  style={{ fontWeight: "800" }}
                >
                  {element.price} CAD
                </BootstrapButton>
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

export default Slider;
