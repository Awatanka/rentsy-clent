import Van from "../VideoHero/van.mp4";
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../VideoHero/videoHero.scss";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const VideoHero = () => {
  const BootstrapButton = styled(Button)({
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    textTransform: "none",
    fontSize: 18,
    width: "150px",
    height: "50px",
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    color: "black",
    borderRadius: "5px",
    backgroundColor: "#ffd500",
    borderColor: "grey",
    margin: "2rem",
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
      borderColor: "black",
      boxShadow: "none",
      color: "white",
      fontSize: 20,
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

  return (
    <section>
      <div className="videoContainer">
        <video autoPlay loop muted id="video">
          <source src={Van} type="video/mp4" />
        </video>{" "}
      </div>

      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="#fff"
      >
        <div className="searchHolder">
          {" "}
          <SearchBar />
          <div className="main-homePage__text">
            <h3 className="main-homePage__text-title">
              Rentsy can help you to rent easily.{" "}
            </h3>
            <p className="main-homePage__text-text">
              {" "}
              Rentsy is websites for rental house hunting that provides you
              additional information, such as nearest dog-off leash area for
              your pets and latest information about crimes.
            </p>

            <section className="main-homePage__text-buttons">
              {" "}
              <Link to={"/mapPage"} style={{ textDecoration: "none" }}>
                {" "}
                <BootstrapButton variant="contained" className="button">
                  {" "}
                  Map view{" "}
                </BootstrapButton>
              </Link>
              <BootstrapButton>List view</BootstrapButton>
            </section>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default VideoHero;
