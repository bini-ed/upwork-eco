import React, { useState } from "react";
import "../css/contact.css";
import TextInput from "./textInput";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    noOfEmployees: "",
    jobTitle: "",
    businessModel: "",
    country: "",
    countryCode: "",
    phoneNumber: "",
    reason: "",
  });
  const handleChange = () => {};
  return (
    <div className="contact">
      <h1>Contact sales</h1>
      <div className="contact__form container">
        <p>Let’s customize a solution for you</p>
        <form>
          <div className="form container">
            <TextInput
              type="text"
              value={form.firstName}
              onChange={handleChange}
              required={true}
              placeHolder="First Name"
              name={form.firstName}
            ></TextInput>
            <TextInput
              type="text"
              value={form.lastName}
              onChange={handleChange}
              required={true}
              placeHolder="Last Name"
              name={form.lastName}
            ></TextInput>
            <TextInput
              type="text"
              value={form.email}
              onChange={handleChange}
              required={true}
              placeHolder="Business Email"
              name={form.email}
            ></TextInput>
            <TextInput
              type="text"
              value={form.companyName}
              onChange={handleChange}
              required={true}
              placeHolder="Company Name"
              name={form.companyName}
            ></TextInput>
            <div class="dropdown">
              <p>No. of Employees</p>
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <p class="dropdown-item">1-50</p>
                <p class="dropdown-item">51-500</p>
                <p class="dropdown-item">501-1500</p>
                <p class="dropdown-item">1501-10000</p>
                <p class="dropdown-item">10000+</p>
              </div>
            </div>
            <TextInput
              type="text"
              value={form.jobTitle}
              onChange={handleChange}
              required={true}
              placeHolder="Job Title"
              name={form.jobTitle}
              label="Job Title"
            ></TextInput>
            {/*  */}
            <div class="dropdown">
              <p>Business Model</p>
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <p class="dropdown-item">Other clear aligner product</p>
                <p class="dropdown-item">Direct to Consumer</p>
                <p class="dropdown-item">Distributor</p>
                <p class="dropdown-item">Dental Lab</p>
                <p class="dropdown-item">Dental Service Organization</p>
                <p class="dropdown-item">Partner</p>
              </div>
            </div>
            {/*  */}
            <div class="dropdown">
              <p>Country</p>
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </div>
            </div>
            {/*  */}
            <div class="dropdown">
              <p>Country Code</p>
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </div>
            </div>
            {/*  */}

            <TextInput
              type="number"
              value={form.phoneNumber}
              onChange={handleChange}
              required={true}
              placeHolder="Phone Number"
              name={form.phoneNumber}
              label="Phone Number"
            ></TextInput>

            {/*  */}

            {/*  */}
            <div class="dropdown ">
              <p>Main Reason for Reaching Out*</p>
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select
              </button>
              <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                <p class="dropdown-item">
                  Thinking about launching my own clear aligner solution
                </p>
                <p class="dropdown-item">Starting a clear aligner company</p>
                <p class="dropdown-item">
                  Interested in switching manufacturing providers
                </p>
                <p class="dropdown-item">
                  Interested in switching treatment planning providers
                </p>
                <p class="dropdown-item">
                  Want to better understand available software solutions
                </p>
              </div>
            </div>
            {/*  */}
          </div>
          <button className="contact__submit">Submit</button>
        </form>
        <p>Some products and services aren’t avilable in all countries</p>
      </div>

      <div className="contact__footer">
        <h3>Locations</h3>
        <h4>Europe Office</h4>
        <p>Mechelsesteenweg 271 Bus 1.1 2018 Antwerpen Belgium</p>
        <h4>MENA Office</h4>
        <p>385 King Abdullah II Street, Amman 11810 Jordan</p>
        <h3>Contact Us</h3>
        <h4>Email</h4>
        <p>mfg@eonaligner.com</p>
        <h4>Tel - WhatsApp</h4>
        <p>+962 78 0606066</p>
      </div>
      <p>
        ©{new Date().getFullYear()} Eon Enterprise Solutions. All Rights
        Reserved
      </p>
    </div>
  );
}

export default Contact;
