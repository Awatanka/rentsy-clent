import React from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "../../assets/images/4.jpg";
import SendIcon from "@mui/icons-material/Send";
import "./editProfile.scss";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  color: "black",
  width: "120px",
  height: "50px",
  lineHeight: 1.5,
  marginLeft: 7,
  backgroundColor: "#ffd500",
  borderColor: "white",
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
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
});

const EditProfile = () => {
  return (
    <main className="profile">
      <form>
        <div className="formHolder">
          {/* Form First Section */}
          <div className="formFirst">
            <div className="d-flex flex-column align-items-center p-3">
              <img
                className="rounded-circle mt-5 center"
                width="100px"
                height="100px"
                style={{
                  margin: "0 auto",
                  borderRadius: "50%",
                  position: "relative",
                  left: "90px",
                }}
                src={Avatar}
                alt="avatar"
              />
              <div className="formFirst__bottom">
                <TextField
                  label="Email address"
                  type="email"
                  placeholder="example@gmail.com"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Phone number"
                  type="tel"
                  placeholder="234-76-1675"
                  fullWidth
                  margin="normal"
                />
              </div>
            </div>
          </div>

          {/* Form Second Section */}
          <div className="formHolder__second">
            <h3 className="formHolder__second-title">Personal Information</h3>
            <TextField
              className="text-muted"
              variant="standard"
              fullWidth
              disabled
              value="This information will be used to generate TenantBC Form Application. We'll never share it with anyone else."
              margin="normal"
            />
            <div className="formHolder__second-content">
              {/* Form Second Section - Left Part */}
              <div className="formSecond">
                <div style={{ margin: "0 20px" }}>
                  <TextField
                    label="First Name"
                    type="name"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Last Name"
                    type="name"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Current Address"
                    type="text"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="City"
                    type="text"
                    fullWidth
                    margin="normal"
                  />
                  <TextField type="date" fullWidth margin="normal" />
                  <TextField
                    label="Name of Landlord"
                    type="name"
                    fullWidth
                    margin="normal"
                  />
                </div>
              </div>

              {/* Form Second Section - Right Part */}
              <div className="formThird">
                <div style={{ margin: "0 20px" }}>
                  <TextField
                    label="Occupation"
                    type="position"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Company"
                    type="company"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="How long have you worked there?"
                    type="number"
                    defaultValue=""
                    fullWidth
                    margin="normal"
                  />
                  <section>
                    <TextField
                      label="Reference"
                      type="name"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="Relationship"
                      type="text"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="Phone Number"
                      type="tel"
                      fullWidth
                      margin="normal"
                    />
                  </section>
                  <div className="extraForm">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="custom-switch-pets"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="custom-switch-pets"
                      >
                        Pets
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="custom-switch-smoking"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="custom-switch-smoking"
                      >
                        Smoking
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttonSection-editProfile">
          <Button variant="outlined" className="cancel">
            Cancel
          </Button>
          <BootstrapButton variant="contained" className="submit">
            Submit <SendIcon />
          </BootstrapButton>
        </div>
      </form>
    </main>
  );
};

export default EditProfile;
