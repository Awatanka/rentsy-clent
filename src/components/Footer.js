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
      style={{ color: "white", marginLeft: 10 }}
    >
      {icon} <span style={{ marginRight: 8 }}>{text}</span>
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
            border: "1px solid white",
            color: "white",
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

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "#161715", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" component="h6" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              {description}
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
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
            <FooterButton text="CONTACT US" href="/" />
          </Grid>

          <Grid item xs={12} md={3}>
            <FooterButton
              text="Vancouver, BC 000000, CA"
              href="https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/calculators-and-resources/policy-guidelines"
              target="_blank"
            />

            <FooterButton text="info@gmail.com" href="mailto:info@gmail.com" />

            <FooterButton text="+ 01 000 000 0000" href="tel:+010000000000" />
          </Grid>
        </Grid>

        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={7} textAlign={{ xs: "center", md: "start" }}>
            <Typography variant="body2" color="textSecondary">
              © {new Date().getFullYear()} NS WebDesign. All rights reserved.
            </Typography>
          </Grid>

          <Grid item xs={12} md={5} textAlign={{ xs: "center", md: "end" }}>
            <SocialLink href="/" icon={<InstagramIcon />} text="Instagram" />
            <SocialLink href="/" icon={<TwitterIcon />} text="Twitter" />
            <SocialLink href="/" icon={<GTranslateIcon />} text="Translate" />
            <SocialLink href="/" icon={<FacebookIcon />} text="Facebook" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
