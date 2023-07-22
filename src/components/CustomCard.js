import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";

function checkItem(item) {
  return (
    item.bedrooms && item.bathrooms && item.price && item.address && item.imgSrc
  );
}

export default function CustomCard({ items }) {
  return (
    <Grid container spacing={2}>
      {items
        .filter((item) => checkItem(item))
        .map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.zipid}>
            {console.log(item.zipid)}
            <Link
              to={`/card/${item.zpid}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  borderRadius: ".4125rem",
                  fontSize: "14px",
                  border: "5px",
                  width: 300,
                }}
              >
                <CardMedia
                  component="img"
                  src={item.imgSrc}
                  alt={item.name}
                  style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    width: "100%",
                    borderRadius: ".3125rem",
                  }}
                />
                <CardContent
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
                </CardContent>
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.5rem",
                    }}
                  >
                    <Typography variant="subtitle2">
                      {item.propertyType}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{
                        background: "#ffd500",
                        width: "fit-content",
                        padding: "0.5rem",
                        borderRadius: ".3125rem",
                        border: "1px solid #ffd500",
                        fontWeight: 700,
                      }}
                    >
                      {item.price} {item.currency}
                    </Typography>
                  </div>
                  <Typography
                    variant="body2"
                    style={{
                      textAlign: "center",
                      height: "3rem",
                      padding: "0 3rem",
                    }}
                  >
                    {item.address}
                  </Typography>
                  <div
                    style={{
                      background: "#f8f9fa",
                      borderTop: "1px solid #ffd500",
                      display: "flex",
                      height: "5rem",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "1rem",
                      }}
                    >
                      <BedOutlinedIcon style={{ fill: "#8e9aaf" }} />
                      <Typography variant="body2">
                        {" "}
                        {item.bedrooms} Bed
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "1rem",
                      }}
                    >
                      <BathtubOutlinedIcon style={{ fill: "#8e9aaf" }} />
                      <Typography variant="body2">
                        {item.bathrooms} Bath
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
    </Grid>
  );
}
