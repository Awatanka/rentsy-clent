import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {
  Twitter as TwitterIcon,
  GTranslate as GTranslateIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";

function SocialLink(props) {
  const { href, icon, text } = props;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      style={{
        color: "white",
        marginLeft: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {icon} <p style={{ marginLeft: 10 }}>{text}</p>
    </Link>
  );
}

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

function FooterButton(props) {
  const { text, href, target } = props;

  return (
    <div style={{ margin: 20 }}>
      <Link
        href={href}
        target={target}
        rel="noopener noreferrer"
        underline="none"
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="outlined"
          color="primary"
          style={{
            margin: 15,
            border: "0.5px solid grey",
            color: "white",
            boxShadow: "0 0 8px 1px rgba(0, 0, 0, 0.4)",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
          }}
          fullWidth
        >
          {text}
        </Button>
      </Link>
    </div>
  );
}

FooterButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
};

FooterButton.defaultProps = {
  target: "_blank",
};

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#161715", py: 6 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={9} md={3}>
          <FooterButton
            text="Tenancy Policy"
            href="https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/calculators-and-resources/policy-guidelines"
            target="_blank"
          />
          <FooterButton
            text="Vancouver Travel"
            href="https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/calculators-and-resources/policy-guidelines"
            target="_blank"
          />
        </Grid>
        <Grid item xs={9} md={3}>
          <FooterButton
            text="Vancouver, BC 000000, CA"
            href="https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/calculators-and-resources/policy-guidelines"
            target="_blank"
          />
          <FooterButton text="info@gmail.com" href="mailto:info@gmail.com" />
        </Grid>{" "}
        <Grid item xs={9} md={3}>
          <FooterButton text="CONTACT US" href="/" />
          <FooterButton text="+ 01 000 000 0000" href="tel:+010000000000" />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" alignItems="center" padding={1}>
        <SocialLink href="/" icon={<InstagramIcon />} text="Instagram" />
        <SocialLink href="/" icon={<TwitterIcon />} text="Twitter" />
        <SocialLink href="/" icon={<GTranslateIcon />} text="Translate" />
        <SocialLink href="/" icon={<FacebookIcon />} text="Facebook" />{" "}
      </Grid>
      <Typography
        variant="body2"
        color="white"
        style={{ marginRight: "20px", fontSize: "10px", textAlign: "right" }}
      >
        © {new Date().getFullYear()} NS WebDesign. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
