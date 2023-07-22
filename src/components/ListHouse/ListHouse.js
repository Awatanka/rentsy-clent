import "./listHouse.scss";
import { Link } from "react-router-dom";
import data from "./house.json";
import { useEffect, useState } from "react";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ListHouse() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data.props);
  }, []);

  const checkItem = (item) => {
    return item.bedrooms && item.bathrooms && item.price && item.address;
  };

  return (
    <>
      {items && (
        <section className="cardSectionHome">
          {" "}
          {items
            .filter((item) => item.propertyType === "SINGLE_FAMILY")
            .slice(14, 18)
            .map((item) => (
              <div className="homePage-card" key={item.zipid}>
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
        </section>
      )}
    </>
  );
}
