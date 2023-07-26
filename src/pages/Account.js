import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Avatar from "../assets/images/4.jpg";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import CustomButtonComponent from "../components/CustomButtonComponent";

const useStyles = makeStyles(() => ({
  paper: {
    padding: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  buttonSectionAccount: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 2,
  },
  cancel: {
    border: "1px solid #0d6efd",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    textTransform: "none",
    fontSize: 16,
    width: "280px",
    height: "50px",
    padding: "6px 12px",
    lineHeight: 1.5,
    color: "black",
    margin: "1rem 0",
    backgroundColor: "#ffd500",
    borderColor: "grey",
    "&:hover": {
      backgroundColor: "grey",
      borderColor: "#ffd500",
      color: "white",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
}));

const labels = [
  "Email address",
  "Phone number",
  "Pets",
  "First Name",
  "Last Name",
  "Current Address",
  "City",
  "Date of Tenancy",
  "Name of Landlord",
  "Occupation",
  "Company",
  "Work history",
  "Reference",
  "Relationship",
  "Phone Number",
];

const Account = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requiredFields = ["Email address", "First Name", "Last Name"];
    const missingFields = requiredFields.filter((field) => !formData[field]);
    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
      return;
    }
    console.log("Form submitted with data:", formData);
    setFormData({});
  };

  const handleDownload = (event) => {
    event.preventDefault();
    console.log("Downloaded");
  };

  return (
    <Container maxWidth="lg" component="main">
      <Grid container justifyContent="center" style={{ margin: "40px 0" }}>
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} className={classes.paper}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        margin: "0 auto",
                      }}
                      src={Avatar}
                      alt="avatar"
                    />
                    <div>
                      {labels.slice(0, 3).map((label) => (
                        <FormControl
                          fullWidth
                          key={label}
                          style={{ margin: "10px" }}
                        >
                          <TextField
                            label={label}
                            variant="outlined"
                            name={label}
                            value={formData[label] || ""}
                            onChange={handleInputChange}
                          />
                        </FormControl>
                      ))}
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <div>
                    {labels.slice(3, 9).map((label) => (
                      <FormControl fullWidth key={label}>
                        <TextField
                          label={label}
                          variant="outlined"
                          name={label}
                          value={formData[label] || ""}
                          onChange={handleInputChange}
                          style={{ margin: "5px" }}
                        />
                      </FormControl>
                    ))}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className="flex-column align-items-center p-3">
                    {labels.slice(9, 12).map((label) => (
                      <FormControl fullWidth key={label}>
                        <TextField
                          label={label}
                          variant="outlined"
                          name={label}
                          value={formData[label] || ""}
                          onChange={handleInputChange}
                          style={{ margin: "5px" }}
                        />
                      </FormControl>
                    ))}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div>
                    <section>
                      {labels.slice(12).map((label) => (
                        <FormControl fullWidth key={label}>
                          <TextField
                            label={label}
                            variant="outlined"
                            name={label}
                            value={formData[label] || ""}
                            onChange={handleInputChange}
                            style={{ margin: "5px" }}
                          />
                        </FormControl>
                      ))}
                    </section>
                  </div>
                </Grid>
              </Grid>
              <div className={classes.buttonSectionAccount}>
                <div>
                  <CustomButtonComponent type="submit">
                    Submit
                  </CustomButtonComponent>
                  <CustomButtonComponent
                    style={{ background: "grey", border: "1px solid grey" }}
                    onClick={handleDownload}
                  >
                    Download PDF
                  </CustomButtonComponent>
                </div>
                <div>
                  <Link to={"/editProfile"}>
                    <button
                      style={{
                        borderRadius: "50%",
                        color: "#30302f",
                        border: "none",
                        width: "60px",
                        height: "60px",
                        cursor: "pointer",
                      }}
                    >
                      EDIT
                      <AddIcon />
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Account;
