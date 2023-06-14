import "./favourite.scss";
import { Link } from "react-router-dom";
import data from "../../components/CardsList/item.json";
import { useEffect, useState } from "react";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";

export default function Favorite() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
    console.log(data);
  }, []);

  return (
    <>
      <aside className="favList">
        <h3 className="favList-header"> </h3>
        {items.map((item) => (
          <div className="favList-card" key={item.id}>
            <Link
              to={"/card/cardId"}
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              <card className="favList-card__holder">
                <div className="favList-card__top">
                  {/* <FavoriteBorderIcon className="heart" color="white" /> */}
                  <img
                    className="favList-card__top-img"
                    src={item.imgSrc}
                    alt={item.name}
                  />
                </div>
                <div className="favList-card__bottom">
                  <div className="favList-card__property">
                    {" "}
                    <h6 className="favList-card__bottom-header">
                      {item.propertyType}
                    </h6>
                    <p className="favList-card__bottom-price">
                      {" "}
                      {item.price} {item.currency}
                    </p>
                  </div>

                  <p className="favList-card__bottom-address">
                    {" "}
                    {item.address}
                  </p>

                  <div className="favList-card__bottom-extra">
                    <div className="favList-card__bedroom">
                      {" "}
                      <BedOutlinedIcon style={{ fill: "#8e9aaf" }} />
                      <p> {item.bedrooms} Bed</p>
                    </div>
                    <div className="favList-card__bathroom">
                      {" "}
                      <BathtubOutlinedIcon
                        style={{ fill: "#8e9aaf" }}
                        className="favList-card__bathroom-icon"
                      />
                      <p className="favList-card__bathroom-text">
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
