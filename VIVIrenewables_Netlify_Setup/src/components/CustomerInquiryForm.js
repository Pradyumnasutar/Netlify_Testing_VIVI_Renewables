import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Col, Row, Card, Container } from "react-bootstrap";
import emailjs from "emailjs-com";
import "../assets/CSS/CategaryBtn.css";

const CustomerInquiryForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [countryCode, setCountryCode] = useState("+91");
  const [selectedBill, setSelectedBill] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Residential"); // State for selected category
  const [isChecked, setIsChecked] = useState(true);

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleBillSelection = (value) => {
    setSelectedBill(value);
    setValue("monthlyBill", value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const onSubmit = (data) => {
    const contactNumberWithCode = countryCode + data.contactNumber;
    const updatedData = { ...data, contactNumber: contactNumberWithCode };

    console.log(updatedData);

    emailjs
      .send(
        "service_8f0s8iq",
        "template_aedry76",
        updatedData,
        "MpRF9puTlKdQdac8Y"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Your inquiry has been submitted successfully!");
          window.location.href = "/";
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert(
            "There was an issue submitting your inquiry. Please try again."
          );
          window.location.href = "/";
        }
      );
  };

  return (
    <Container
      className="my-5 d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <div className="background-wrapper" style={{ width: "100%" }}>
          <h3 className="d-flex justify-content-center align-items-center mb-">
            Connect with Our Solar Advisor
          </h3>
          <div className="d-flex justify-content-center align-items-center border-box mb-2">
            <Row className="mb-0">
              <Col className="d-flex justify-content-center me-0">
                <Button
                  className="category-btns"
                  onClick={() => handleCategoryChange("Residential")}
                >
                  Residential
                </Button>
              </Col>
              <Col className="d-flex justify-content-center me-0">
                <Button
                  className="category-btns"
                  onClick={() => handleCategoryChange("Housing Society")}
                >
                  Housing Society
                </Button>
              </Col>
              <Col className="d-flex justify-content-center">
                <Button
                  className="category-btns"
                  onClick={() => handleCategoryChange("Commercial")}
                >
                  Commercial
                </Button>
              </Col>
            </Row>
          </div>

          <div className="d-flex justify-content-center align-items-center form-content-wrapper">
            <div className="form-wrapper">
              <Card className="shadow-lg p-4">
                <Form id="inquiryForm" onSubmit={handleSubmit(onSubmit)}>
                  <Row className="mb-3">
                    <Col md={12}>
                      <Form.Group controlId="name">
                        <Form.Label>
                          Full Name <span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          {...register("name", {
                            required: "Name is required",
                          })}
                          isInvalid={!!errors.name}
                          placeholder="Enter your name"
                        />
                        <Form.Control.Feedback type="invalid">
                          Name is required
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col md={12}>
                      <Form.Group controlId="contactNumber">
                        <Form.Label>
                          Contact Number <span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <div className="d-flex">
                          <Form.Control
                            as="select"
                            value={countryCode}
                            onChange={handleCountryCodeChange}
                            style={{ width: "70px", marginRight: "10px" }}
                          >
                            <option value="+91">+91</option>
                            <option value="+1">+1</option>
                            <option value="+44">+44</option>
                            <option value="+61">+61</option>
                          </Form.Control>

                          <Form.Control
                            type="text"
                            {...register("contactNumber", {
                              required: "Contact number is required",
                              pattern: {
                                value: /^[0-9]{10}$/,
                                message:
                                  "Please enter a valid contact number with 10 digits",
                              },
                              maxLength: {
                                value: 10,
                                message: "Please enter no more than 10 digits",
                              },
                            })}
                            isInvalid={!!errors.contactNumber}
                            placeholder="Enter your contact number"
                          />
                        </div>
                        <Form.Control.Feedback type="invalid">
                          {errors.contactNumber?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* pincode */}
                  <Row className="mb-3">
                    <Col md={12}>
                      <Form.Group controlId="pincode">
                        <Form.Label>
                          Pincode <span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <Form.Control
                          type="number"
                          {...register("pincode", {
                            required: "Pincode is required",
                          })}
                          isInvalid={!!errors.pincode}
                          placeholder="Enter your pincode"
                        />
                        <Form.Control.Feedback type="invalid">
                          Pincode is required
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* average monthly bill  */}
                  {selectedCategory === "Residential" && (
                    <>
                  <Row className="mb-3">
                    <Col md={12}>
                      <Form.Group controlId="monthlyBill">
                        <Form.Label>
                          Monthly Electricity Bill{" "}
                          <span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-2">
                          {[
                            "<1500",
                            "1500-2500",
                            "2500-4000",
                            "4000-8000",
                            ">8000",
                          ].map((range) => (
                            <Button
                              key={range}
                              variant={
                                selectedBill === range ? "dark" : "light"
                              }
                              className="border-dark"
                              onClick={() => handleBillSelection(range)}
                            >
                              {range === "<1500"
                                ? "Less than ₹1500"
                                : range === ">8000"
                                ? "More than ₹8000"
                                : `₹${range.replace("-", " - ₹")}`}
                            </Button>
                          ))}
                        </div>
                        <input
                          type="hidden"
                          {...register("monthlyBill", {
                            required: "Please select a bill range",
                          })}
                          value={selectedBill}
                        />
                        {errors.monthlyBill && (
                          <div className="text-danger">
                            {errors.monthlyBill.message}
                          </div>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  </>
                )}
                  {/* Housing Society */}
                  {selectedCategory === "Housing Society" && (
                    <>
                    <Row className="mb-3">
                    <Col md={12}>
                      <Form.Group controlId="monthlyBill">
                        <Form.Label>
                          Monthly Electricity Bill{" "}
                          <span style={{ color: "red" }}>*</span>
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-2">
                          {[
                            "0-50000",
                            "50000-1 lakh",
                            "1 lakh-2 lakh",
                            ">200000",
                          ].map((range) => (
                            <Button
                              key={range}
                              variant={
                                selectedBill === range ? "dark" : "light"
                              }
                              className="border-dark"
                              onClick={() => handleBillSelection(range)}
                            >
                              {range === "<50000"
                                ? "0 - ₹50000"
                                : range === ">200000"
                                ? "More than ₹2 lakh"
                                : `₹${range.replace("-", " - ₹")}`}
                            </Button>
                          ))}
                        </div>
                        <input
                          type="hidden"
                          {...register("monthlyBill", {
                            required: "Please select a bill range",
                          })}
                          value={selectedBill}
                        />
                        {errors.monthlyBill && (
                          <div className="text-danger">
                            {errors.monthlyBill.message}
                          </div>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>

                    <Row className="mb-3">
                      <Col md={12}>
                        <Form.Group controlId="numberOfUnits">
                          <Form.Label>
                            What is your designation in Housing Society{" "}
                            <span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Form.Control
                            as="select"
                            {...register("numberOfUnits", {
                              required: "Number of units is required",
                            })}
                            isInvalid={!!errors.numberOfUnits}
                            placeholder="Enter number of units"
                          >
                          <option value="">Select Value </option>
                          <option value="Management commitee member">Management commitee member</option>
                            <option value="Resident">Resident</option>
                            <option value="Builder">Builder</option>
                            <option value="Facility Manager">Facility Manager</option>
                            </Form.Control>
                          <Form.Control.Feedback type="invalid">
                            Number of units is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    </>
                  )}
                  {/* Commercial */}
                  {selectedCategory === "Commercial" && (
                    <>
                      <Row className="mb-3">
                        <Col md={12}>
                          <Form.Group controlId="companyName">
                            <Form.Label>
                              Company Name{" "}
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              {...register("companyName", {
                                required: "Company Name is required",
                              })}
                              isInvalid={!!errors.companyName}
                              placeholder="Enter your Company Name"
                            />
                            <Form.Control.Feedback type="invalid">
                              Company Name is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>

                       <Row className="mb-3">
                        <Col md={12}>
                          <Form.Group controlId="monthlyBill">
                            <Form.Label>
                              Average Monthly Bill <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                              type="number"
                              {...register("monthlyBill", {
                                required: "Monthly Bill is required",
                              })}
                              isInvalid={!!errors.pincode}
                              placeholder="Enter your Average Monthly Bill"
                            />
                            <Form.Control.Feedback type="invalid">
                            Monthly Bill is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>
                    </>
                  )}

                  <Form.Check
                    className="mb-3"
                    type="checkbox"
                    label="I agree to ViVi Renewables terms of service & privacy policy"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    required
                  />
                  <Button variant="primary" type="submit" className="w-100">
                    Submit Inquiry
                  </Button>
                </Form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CustomerInquiryForm;
