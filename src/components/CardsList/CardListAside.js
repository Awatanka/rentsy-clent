import "./cardList.scss";
import { Link } from "react-router-dom";

import data from "../../data/item.json";
import { useEffect, useState } from "react";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";

export default function CardListAside() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
    console.log(data);
  }, []);

  return (
    <>
      <aside className="cardList">
        <h3 className="cardList-header"> </h3>

        {items.map((item) => (
          <div className="cardList-card" key={item.id}>
            <Link
              to={`/card/${item.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              <card className="cardList-card__holder">
                <div className="cardList-card__top">
                  {/* <FavoriteBorderIcon className="heart" color="white" /> */}
                  <img
                    className="cardList-card__top-img"
                    src={item.imgSrc}
                    alt={item.name}
                  />
                </div>
                <div className="cardList-card__bottom">
                  <div className="cardList-card__property">
                    <h6 className="cardList-card__bottom-header">
                      {item.propertyType}
                    </h6>
                    <p className="cardList-card__bottom-price">
                      {" "}
                      {item.price} {item.currency}
                    </p>
                  </div>

                  <p className="cardList-card__bottom-address">
                    {" "}
                    {item.address}
                  </p>

                  <div className="cardList-card__bottom-extra">
                    <div className="cardList-card__bedroom">
                      {" "}
                      <BedOutlinedIcon style={{ fill: "#8e9aaf" }} />
                      <p> {item.bedrooms} Bed</p>
                    </div>
                    <div className="cardList-card__bathroom">
                      {" "}
                      <BathtubOutlinedIcon
                        style={{ fill: "#8e9aaf" }}
                        className="cardList-card__bathroom-icon"
                      />
                      <p className="cardList-card__bathroom-text">
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
      </aside>
    </>
  );
}
