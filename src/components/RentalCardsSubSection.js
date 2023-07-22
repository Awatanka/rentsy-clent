import React from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { Link } from "react-router-dom";
import { Typography, Grid, Box } from "@mui/material";
import CustomCard from "./CustomCard";

export default function RentalCardsSection({ title, description, items }) {
  return (
    <Box sx={{ margin: "20px 0" }}>
      {items && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" style={{ margin: "10px 0" }}>
                {title}
              </Typography>
              <Typography variant="body1">{description}</Typography>

              <Link
                to={"/card"}
                style={{
                  textDecoration: "none",
                  color: "gray",
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                  margin: "20px 0",
                  fontSize: "20px",
                  fontWeight: 500,
                }}
              >
                View more <ReadMoreIcon style={{ fontSize: 35 }} />
              </Link>
            </Grid>
          </Grid>
          <CustomCard items={items} />
        </>
      )}
    </Box>
  );
}
