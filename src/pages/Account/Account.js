import "../Account/account.scss";
import Form from "react-bootstrap/Form";
import Avatar from "../../assets/images/4.jpg";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Account() {
  const BootstrapButton = styled(Button)({
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    textTransform: "none",
    fontSize: 16,
    width: "280px",
    height: "50px",
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    color: "black",
    margin: "1rem 0",
    backgroundColor: "#ffd500",
    borderColor: "grey",
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
  });
  return (
    <>
      <main className="account">
        {" "}
        <div className="container rounded bg-white mt-3 mb-3">
          <Form>
            <div className="formHolder-account">
              {" "}
              <div className="formFirst">
                <div className="d-flex flex-column align-items-center p-3">
                  {" "}
                  <img
                    className="rounded-circle mt-5 center"
                    width="100px"
                    height="100px"
                    src={Avatar}
                    alt="avatar"
                  />
                  <div className="formFirst__bottom">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="account-label">
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        plaintext
                        readOnly
                        defaultValue="natalia.sokolova.ca@gmail.com"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                      <Form.Label className="account-label">
                        Phone number
                      </Form.Label>
                      <Form.Control
                        type="phone number"
                        plaintext
                        readOnly
                        defaultValue="236869146"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                      <Form.Label className="account-label">Pets</Form.Label>
                      <Form.Control
                        type="text"
                        plaintext
                        readOnly
                        defaultValue="Yes"
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
              <div className="formHolder-account__second">
                <div className="buttonSection-account">
                  <h3 className="formHolder-account__second-title">
                    Account Details
                  </h3>
                  <div className="buttonSection-account__holder">
                    {" "}
                    <Link to={"/editProfile"}>
                      {" "}
                      <Button variant="light cancel" type="submit">
                        Add changes
                        <AddIcon />
                      </Button>{" "}
                    </Link>
                    <BootstrapButton variant="cancel" type="submit">
                      Download PDF
                    </BootstrapButton>
                  </div>
                </div>
                <div className="formHolder-account__second-content">
                  <div className="formSecond">
                    <div className="d-flex flex-column p-3">
                      <Form.Group
                        className="mb-3 account-group"
                        controlId="firstName"
                      >
                        <Form.Label className="account-label">
                          First Name
                        </Form.Label>
                        <Form.Control
                          type="name"
                          plaintext
                          readOnly
                          defaultValue={"Natalia"}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3 account-group"
                        controlId="lastName"
                      >
                        <Form.Label className="account-label">
                          Last Name
                        </Form.Label>
                        <Form.Control
                          type="name"
                          plaintext
                          readOnly
                          defaultValue={"Sokolova"}
                        />{" "}
                      </Form.Group>
                      <Form.Group
                        className="mb-3 account-group"
                        controlId="address"
                      >
                        {" "}
                        <Form.Label className="account-label">
                          Current Address
                        </Form.Label>
                        <Form.Control
                          type="address"
                          plaintext
                          readOnly
                          defaultValue={"1788 Gilmor"}
                        />{" "}
                      </Form.Group>
                      <Form.Group
                        className="mb-3 account-group"
                        controlId="city"
                      >
                        {" "}
                        <Form.Label className="account-label">City</Form.Label>
                        <Form.Control
                          type="city"
                          plaintext
                          readOnly
                          defaultValue={"Burnaby"}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3 account-group"
                        controlId="date"
                      >
                        {" "}
                        <Form.Label className="account-label">
                          Date of Tenancy
                        </Form.Label>
                        <Form.Control
                          type="date"
                          plaintext
                          readOnly
                          defaultValue={"2022-12-16"}
                        />{" "}
                      </Form.Group>
                      <Form.Group
                        className="mb-3 account-group"
                        controlId="nameLandlord"
                      >
                        <Form.Label className="account-label">
                          Name of Landlord
                        </Form.Label>
                        <Form.Control
                          type="name"
                          plaintext
                          readOnly
                          defaultValue={"Mell Gibson"}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="formThird">
                    <div className=" flex-column align-items-center p-3">
                      <Form.Group
                        className="mb-3 account-group"
                        controlId="occupation"
                      >
                        <Form.Label className="account-label">
                          Occupation
                        </Form.Label>
                        <Form.Control
                          type="position"
                          plaintext
                          readOnly
                          defaultValue={"Manager"}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3 account-group"
                        controlId="companyName"
                      >
                        <Form.Label className="account-label">
                          Company
                        </Form.Label>
                        <Form.Control
                          type="company"
                          plaintext
                          readOnly
                          defaultValue={"D&P"}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3 account-group"
                        controlId="companyYear"
                      >
                        {" "}
                        <Form.Label className="account-label">
                          Work history
                        </Form.Label>
                        <Form.Control
                          type="text"
                          plaintext
                          readOnly
                          defaultValue={"2 years"}
                        />
                      </Form.Group>
                      <section>
                        <Form.Group
                          className="mb-3 account-group"
                          controlId="companyYear"
                        >
                          <Form.Label className="account-label">
                            Reference
                          </Form.Label>
                          <Form.Control
                            type="name"
                            plaintext
                            readOnly
                            defaultValue={"Mell Gibson"}
                          />{" "}
                        </Form.Group>
                        <Form.Group
                          className="mb-3 account-group"
                          controlId="companyYear"
                        >
                          <Form.Label className="account-label">
                            Relationship
                          </Form.Label>
                          <Form.Control
                            type="text"
                            plaintext
                            readOnly
                            defaultValue={"Landlord"}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3 account-group"
                          controlId="companyYear"
                        >
                          <Form.Label className="account-label">
                            Phone Number
                          </Form.Label>
                          <Form.Control
                            type="Phone Number"
                            plaintext
                            readOnly
                            defaultValue={"235485995"}
                          />
                        </Form.Group>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
        <div></div>
      </main>
    </>
  );
}
