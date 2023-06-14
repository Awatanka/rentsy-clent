import "../EditProfile/editProfile.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Avatar from "../../assets/images/4.jpg";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/system";

export default function EditProfile() {
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
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
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
  return (
    <>
      <main className="profile">
        <div className="container rounded bg-white mt-2 mb-2">
          <Form>
            <div className="formHolder">
              <div className="formFirst">
                <div className="d-flex flex-column align-items-center p-3">
                  <img
                    className="rounded-circle mt-5 center"
                    width="100px"
                    height="100px"
                    src={Avatar}
                  />
                  <div className="formFirst__bottom">
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        defaultValue="name@example.com"
                      />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPhone">
                      <Form.Label>Phone number</Form.Label>
                      <Form.Control
                        type="phone number"
                        defaultValue="Phone number"
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
              <div className="formHolder__second">
                <h3 className="formHolder__second-title">
                  Personal Information
                </h3>
                <Form.Text className="text-muted">
                  This information will be used to generate TenantBC Form
                  Aplication. <br /> We'll never share it with anyone else.
                </Form.Text>
                <div className="formHolder__second-content">
                  <div className="formSecond">
                    <div className="d-flex flex-column p-3">
                      <Form.Group className="mb-2" controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="name" defaultValue="First Name" />
                      </Form.Group>
                      <Form.Group className="mb-2" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="name"
                          defaultValue="Last Name"
                        />{" "}
                      </Form.Group>
                      <Form.Group className="mb-2" controlId="address">
                        <Form.Label>Current Address</Form.Label>
                        <Form.Control type="text" defaultValue="Address" />
                      </Form.Group>
                      <Form.Group className="mb-2" controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" defaultValue="City" />
                      </Form.Group>
                      <Form.Group className="mb-2" controlId="date">
                        {" "}
                        <Form.Label>Date of Tenancy</Form.Label>
                        <Form.Control type="date" defaultValue="Date" />{" "}
                      </Form.Group>
                      <Form.Group className="mb-2" controlId="nameLandlord">
                        <Form.Label>Name of Landlord</Form.Label>
                        <Form.Control type="name" defaultValue="Full name" />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="formThird">
                    <div className=" flex-column align-items-center p-3">
                      <Form.Group className="mb-2" controlId="occupation">
                        <Form.Label>Occupation</Form.Label>
                        <Form.Control
                          type="position"
                          defaultValue="Occupation"
                        />
                      </Form.Group>
                      <Form.Group className="mb-2" controlId="companyName">
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                          type="company"
                          defaultValue="Company name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-2" controlId="companyYear">
                        {" "}
                        <Form.Label>How long have you worked there?</Form.Label>
                        <Form.Control type="number" defaultValue="" />
                      </Form.Group>
                      <section>
                        <Form.Group className="mb-2" controlId="companyYear">
                          <Form.Label>Reference</Form.Label>
                          <Form.Control
                            type="name"
                            defaultValue="Full name"
                          />{" "}
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="companyYear">
                          <Form.Label>Relationship</Form.Label>
                          <Form.Control
                            type="text"
                            defaultValue="Relationship"
                          />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="companyYear">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="Phone Number"
                            defaultValue="Phone Number"
                          />
                        </Form.Group>
                      </section>

                      <div className="extraForm">
                        {" "}
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Pets"
                        />
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Smoking"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttonSection-editProfile">
              <Button variant="light cancel" type="submit">
                Cancel
              </Button>
              <BootstrapButton variant="primary submit" type="submit">
                Submit <SendIcon />
              </BootstrapButton>
            </div>
          </Form>
        </div>
        <div></div>
      </main>
    </>
  );
}
