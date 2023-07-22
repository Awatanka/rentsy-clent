import * as React from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import "../RentalCard/rentalCards.scss";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function RentalCards({ items }) {
  const checkItem = (item) => {
    return (
      item.bedrooms &&
      item.bathrooms &&
      item.price &&
      item.address &&
      item.imgSrc
    );
  };
  console.log(items);

  sreturn(
    <>
      {items && (
        <>
          <div className="cardNew-title">
            <h4 className="cardNew-title__header"> Latest in Vancouver </h4>
            <p className="cardNew-title__content">
              If you aren’t familiar with Vancouver and it’s many great
              communities and not sure what would be the right fit for you. Are
              you unsure of the going rate in your area? Well we offer our
              'market stats' and 'similar properties' features to gage
              comparable properties to yours. This is a great tool that can
              allow you to point out the advantages your property has over
              another similar property.
            </p>
            <p className="cardNew-title__more">
              <Link
                to={"/card"}
                style={{ textDecoration: "none", color: "black" }}
              >
                View more <ReadMoreIcon />
              </Link>
            </p>
          </div>
          <section className="cardSectionHome">
            {items
              .filter((item) => checkItem(item))
              .slice(2, 6)
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
          <div className="cardNew-title">
            <h4 className="cardNew-title__header"> Similar in Vancouver </h4>
            <p className="cardNew-title__content">
              We have options to filter by price, bedroom count, bathroom count,
              long-term or short-term, housing type, pet friendly, no broker
              fee, and you can search for an apartment by custom keywords.{" "}
            </p>{" "}
            <p className="cardNew-title__more">
              <Link
                to={"/card/:cardId"}
                style={{ textDecoration: "none", color: "black" }}
              >
                View more <ReadMoreIcon />{" "}
              </Link>
            </p>
          </div>
          <section className="cardSectionSimilar">
            {" "}
            {items
              .filter((item) => checkItem(item))
              .slice(12, 16)
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
        </>
      )}
    </>
  );
}
