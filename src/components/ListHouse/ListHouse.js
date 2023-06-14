import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";
import data from "./house.json";
import "../ListHouse/listHouse.scss";

import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ListHouse() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data.props);
  }, []);

  return (
    <>
      {items && (
        <section className="cardSectionHome">
          {items
            .filter((item) => item.propertyType === "SINGLE_FAMILY")
            .slice(14, 18)
            .map((item) => (
              <div className="sidebarHome-card" key={item.zpid}>
                <Link
                  to={`/card/${item.zpid}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card className="homePage-card__holder">
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
                        <Typography variant="subtitle2" component="h6">
                          {item.propertyType}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="homePage-card__bottom-price"
                        >
                          {item.price} {item.currency}
                        </Typography>
                      </div>
                      <Typography
                        variant="body2"
                        className="homePage-card__bottom-address"
                      >
                        {item.address}
                      </Typography>
                      <div className="homePage-card__bottom-extra">
                        <div className="homePage-card__bedroom">
                          <BedOutlinedIcon style={{ fill: "#8e9aaf" }} />
                          <Typography variant="body2">
                            {item.bedrooms} Bed
                          </Typography>
                        </div>
                        <div className="homePage-card__bathroom">
                          <BathtubOutlinedIcon
                            style={{ fill: "#8e9aaf" }}
                            className="homePage-card__bathroom-icon"
                          />
                          <Typography
                            variant="body2"
                            className="homePage-card__bathroom-text"
                          >
                            {item.bathrooms} Bath
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
        </section>
      )}
    </>
  );
}
