import "./sideBar.scss";
import GoogleMapReact from "google-map-react";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SideBar({ items }) {
  const [item, setItem] = useState([]);
  const classes = useStyles();
  const coordinates = { lat: 49.246292, lng: -123.116226 };
  const params = useParams();

  const itemId = params.cardId;

  const BootstrapButton = styled(Button)({
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    textTransform: "none",
    fontSize: 16,
    width: "280px",
    height: "50px",
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    color: "black",
    margin: "1rem 0",
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

  useEffect(() => {
    setItem(items.filter((item) => item.zpid === itemId));
  }, [params]);

  const checkItem = (item) => {
    return (
      item.bedrooms &&
      item.bathrooms &&
      item.price &&
      item.address &&
      item.imgSrc
    );
  };

  const handleItems = (map, maps) => {
    item.map((item) => {
      var place = new maps.Marker({
        position: {
          lat: item.latitude,
          lng: item.longitude,
        },
        // label: item.address,
      });
      place.setMap(map);
      return place;
    });
  };

  return (
    <>
      <aside className="sidebar">
        <div className={classes.mapContainer}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={10}
            margin={[50, 50, 50, 50]}
            options={""}
            onChange={""}
            onChildClick={""}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => {
              handleItems(map, maps);
            }}
          ></GoogleMapReact>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to={"/mapPage"}>
            <BootstrapButton
              variant="contained"
              className="slider-header__button"
              style={{
                backgroundColor: "#3f3e3e",
                color: "white",
                animation: "glowing 5000ms infinite",
              }}
            >
              Explore Neighborhood <HomeIcon style={{ marginLeft: "0.2rem" }} />
            </BootstrapButton>
          </Link>
        </div>
        <div>
          {" "}
          {items &&
            items
              .filter((item) => checkItem(item))
              .slice(2, 16)
              .map((item) => (
                <div className="sidebar-card" key={item.zpid}>
                  <Link
                    to={`/card/${item.zpid}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <card className="homePage-card__holder">
                      <div className="homePage-card__top">
                        <img
                          className="homePage-card__top-img"
                          src={item.imgSrc}
                          alt={item.name}
                        />
                      </div>
                      <div
                        className="homePage-icon"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          margin: "0 0.5rem",
                          fontWeight: "bold",
                        }}
                      >
                        Living area: {item.livingArea} sqft
                        <FavoriteIcon
                          style={{ color: "grey" }}
                          className="homePage-icon__heart"
                        />
                      </div>
                      <div className="homePage-card__bottom">
                        <div className="homePage-card__property">
                          {" "}
                          <h6 className="homePage-card__bottom-header">
                            {item.propertyType}
                          </h6>
                          <p className="homePage-card__bottom-price">
                            {" "}
                            {item.price} {item.currency}
                          </p>
                        </div>

                        <p className="homePage-card__bottom-address">
                          {" "}
                          {item.address}
                        </p>

                        <div className="homePage-card__bottom-extra">
                          <div className="homePage-card__bedroom">
                            {" "}
                            <BedOutlinedIcon style={{ fill: "#8e9aaf" }} />
                            <p> {item.bedrooms} Bed</p>
                          </div>
                          <div className="homePage-card__bathroom">
                            {" "}
                            <BathtubOutlinedIcon
                              style={{ fill: "#8e9aaf" }}
                              className="homePage-card__bathroom-icon"
                            />
                            <p className="homePage-card__bathroom-text">
                              {" "}
                              {item.bathrooms} Bath
                            </p>
                          </div>
                        </div>
                      </div>
                    </card>
                  </Link>
                </div>
              ))}
        </div>
      </aside>
    </>
  );
}
