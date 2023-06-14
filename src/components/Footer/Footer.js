import { Link } from "react-router-dom";
import { Button, Grid, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import ContactsIcon from "@mui/icons-material/Contacts";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";

const CustomButton = styled(Button)({
  marginBottom: "5px",
  width: "9rem",
  color: "rgb(235, 230, 230)",
  background: "rgba(248, 243, 243, 0.5)",
  fontSize: "12px",
  textDecoration: "none",
  letterSpacing: "2px",
  textTransform: "uppercase",
  height: "3rem",
  borderColor: "#ffffff",
  "&:hover": {
    background: "#ffd500",
    color: "black",
    border: ".0625rem solid black",
    fontWeight: 600,
  },
  "&:active": {
    background: "#ffd500",
    color: "black",
  },
});

const Footer = () => {
  return (
    <Grid
      container
      component="footer"
      sx={{
        backgroundColor: "rgb(67, 67, 67)",
        justifyContent: "center",
        padding: "2rem 1rem",
      }}
    >
      <Grid item xs={12} md={3} sx={{ marginBottom: "1rem" }}>
        <Typography
          variant="h6"
          component="h6"
          sx={{ fontWeight: 500, fontSize: "1.25rem", textAlign: "center" }}
        >
          RENTSY
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#ffffff", textAlign: "justify" }}
        >
          Once you’re ready to inquire about a rental property, you can email
          the property owner directly to schedule a property showing in person
          or virtually. Rentsy can also save you time inquiring about rentals
          with their 1-Click Request feature — a feature that allows renters to
          complete their information once to share with multiple landlords.
        </Typography>
      </Grid>
      <Grid item xs={12} md={2} sx={{ marginBottom: "1rem" }}>
        <CustomButton variant="outlined" component={Link} to="/Rent">
          RENT
        </CustomButton>
        <CustomButton variant="outlined" component={Link} to="/Favourite">
          FAVOURITE
        </CustomButton>
        <CustomButton variant="outlined" component={Link} to="/Guideline">
          GUIDELINE
        </CustomButton>
      </Grid>
      <Grid item xs={12} md={2} sx={{ marginBottom: "1rem" }}>
        <CustomButton variant="outlined" component={Link} to="/TenancyPolicy">
          Tenancy Policy
        </CustomButton>
        <CustomButton variant="outlined" component={Link} to="/VancouverTravel">
          Vancouver Travel
        </CustomButton>
        <CustomButton variant="outlined">CONTACT US</CustomButton>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="body2">
          <BusinessIcon /> Vancouver, BC 000000, CA
        </Typography>
        <Typography variant="body2">
          <EmailIcon /> info@gmail.com
        </Typography>
        <Typography variant="body2">
          <ContactsIcon /> + 01 000 000 0000
        </Typography>
      </Grid>

      <hr className="w-100 clearfix d-md-none" />

      <Grid item xs={12}>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", fontWeight: 500 }}
        >
          © 2022 NS WebDesign
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{ textAlign: "center", marginTop: "1rem" }}>
        <IconButton
          sx={{ margin: "0.5rem" }}
          component="a"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          sx={{ margin: "0.5rem" }}
          component="a"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          sx={{ margin: "0.5rem" }}
          component="a"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GTranslateIcon />
        </IconButton>
        <IconButton
          sx={{ margin: "0.5rem" }}
          component="a"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Footer;
