import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Typography, Card, CardMedia, Grid } from "@mui/material";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import { styled } from "@mui/system";

const ModernCard = styled(Card)(() => ({
  borderRadius: "8px",
  fontSize: "14px",
  width: 300,
  height: 450,
  boxShadow:
    "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  transition:
    "transform 0.3s, box-shadow 0.3s, background-color 0.3s, opacity 0.3s",
  background: "#fff",

  "&:hover": {
    transform: "scale(1.05)",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    background: "#f5f5f5",
    opacity: 0.9,
  },
}));

const CustomCardMedia = styled(CardMedia)({
  position: "relative",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  width: "100%",
  borderRadius: ".3125rem",
});

const PriceTag = styled(Typography)(() => ({
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "rgb(255, 213, 0, 0.9)",
  width: "fit-content",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
  padding: "0.5rem",
  borderRadius: ".3125rem",
  border: "1px solid #E1CE6D",
  fontWeight: 700,
  zIndex: 99,
}));

const AddressTypography = styled(Typography)({
  textAlign: "center",
  padding: "0 3rem",
  fontSize: "13px",
  color: "#806B80",
  margin: "20px 0",
});

const IconWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  padding: "1rem",
});

const CustomFavoriteIcon = styled(FavoriteIcon)({
  color: "rgb(255, 213, 0, 0.9)",
  transition: "transform 0.3s, color 0.3s",

  "&:hover": {
    transform: "scale(1.2)",
    color: "#FF0032",
  },
});

function checkItem(item) {
  return (
    item.bedrooms && item.bathrooms && item.price && item.address && item.imgSrc
  );
}

function changeWordFormat(propertyType) {
  const words = propertyType.split("_");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  const formattedPropertyType = capitalizedWords.join(" ");

  return formattedPropertyType;
}

function normalizeAddress(address) {
  // Find the index of "#"
  const hashIndex = address.indexOf("#");

  // Replace "#" with "Unit"
  const replacedHash =
    hashIndex !== -1 ? address.replace("#", "Unit ") : address;

  // Replace "BC" with an empty string
  const withoutBC = replacedHash.replace(/\bBC\b/g, "");

  // Replace multiple spaces with a single space
  const condensedAddress = withoutBC.replace(/\s+/g, " ").trim();

  return condensedAddress;
}

export default function CustomCard({ items }) {
  return (
    <Grid container spacing={2}>
      {items
        .filter((item) => checkItem(item))
        .map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.zpid}>
            <Link
              to={`/card/${item.zpid}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ModernCard>
                <div style={{ height: "80%" }}>
                  <PriceTag>
                    {item.price} {item.currency}
                  </PriceTag>
                  <CustomCardMedia
                    component="img"
                    src={item.imgSrc}
                    alt={changeWordFormat(item.propertyType)}
                  />
                  <div style={{ margin: "10px 20px" }}>
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "left",
                          flexDirection: "column",
                        }}
                      >
                        <Typography fontSize={20} fontStyle={""}>
                          {changeWordFormat(item.propertyType)}
                        </Typography>
                        <Typography fontSize={12} fontWeight={"bold"}>
                          {item.livingArea} sqft
                        </Typography>
                      </div>

                      <CustomFavoriteIcon />
                    </div>
                    <AddressTypography>
                      {normalizeAddress(item.address)}
                    </AddressTypography>
                  </div>
                </div>

                <div
                  style={{
                    background: "#f8f9fa",
                    borderTop: "1px solid #ffd500",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconWrapper>
                    <BedOutlinedIcon style={{ fill: "#8e9aaf" }} />
                    <Typography variant="body2">{item.bedrooms} Bed</Typography>
                  </IconWrapper>
                  <IconWrapper>
                    <BathtubOutlinedIcon style={{ fill: "#8e9aaf" }} />
                    <Typography variant="body2">
                      {item.bathrooms} Bath
                    </Typography>
                  </IconWrapper>
                </div>
              </ModernCard>
            </Link>
          </Grid>
        ))}
    </Grid>
  );
}
