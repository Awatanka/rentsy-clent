import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GoogleMapReact from "google-map-react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";

// import "./sideBar.scss";
import useStyles from "./styles";

const SideBar = ({ items }) => {
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
      "Apple Color Emoji",
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
        <div className="sidebar-button-container">
          <Link to={"/mapPage"} className="sidebar-link">
            <BootstrapButton variant="contained" className="sidebar-button">
              Explore Neighborhood <HomeIcon className="sidebar-button-icon" />
            </BootstrapButton>
          </Link>
        </div>
        <div>
          {items &&
            items
              .filter((item) => checkItem(item))
              .slice(2, 16)
              .map((item) => (
                <div className="sidebar-card" key={item.zpid}>
                  <Link to={`/card/${item.zpid}`} className="sidebar-card-link">
                    <card className="sidebar-card-holder">
                      <div className="sidebar-card-top">
                        <img
                          className="sidebar-card-top-img"
                          src={item.imgSrc}
                          alt={item.name}
                        />
                      </div>
                      <div className="sidebar-icon">
                        <div className="sidebar-icon-content">
                          Living area: {item.livingArea} sqft
                          <FavoriteIcon className="sidebar-icon-heart" />
                        </div>
                      </div>
                      <div className="sidebar-card-bottom">
                        <div className="sidebar-card-property">
                          <h6 className="sidebar-card-bottom-header">
                            {item.propertyType}
                          </h6>
                          <p className="sidebar-card-bottom-price">
                            {item.price} {item.currency}
                          </p>
                        </div>
                        <p className="sidebar-card-bottom-address">
                          {item.address}
                        </p>
                        <div className="sidebar-card-bottom-extra">
                          <div className="sidebar-card-bedroom">
                            <BedOutlinedIcon style={{ fill: "#8e9aaf" }} />
                            <p>{item.bedrooms} Bed</p>
                          </div>
                          <div className="sidebar-card-bathroom">
                            <BathtubOutlinedIcon
                              style={{ fill: "#8e9aaf" }}
                              className="sidebar-card-bathroom-icon"
                            />
                            <p className="sidebar-card-bathroom-text">
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
};

export default SideBar;
