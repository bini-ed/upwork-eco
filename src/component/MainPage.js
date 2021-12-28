import React from "react";
import "../css/mainpage.css";
import Image from "../assets/braces.png";
import Aligner from "../assets/aligner.png";
import Model from "../assets/3d.png";

function MainPage() {
  return (
    <div className="mainpage ">
      <div className="mainpage__container container-fluid">
        <img className="mainpage__pic" src={Image} alt="brace"></img>

        <h1>
          The <span>Clear Aligner</span> Partner That Empowers Your Brand.
        </h1>
      </div>
      <div className="mainpage__body">
        <div className="mainpage__body__card">
          <img
            className="mainpage__body__image"
            src={Aligner}
            alt="brace"
          ></img>
          <h2>High-Quality Aligners</h2>
          <p>
            Scalable and customizable precision manufacturing using the latest
            automation technologies
          </p>
        </div>

        <div className="mainpage__body__card">
          <img
            className="mainpage__body__image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXNYJjTwrvE3fl7N05sXNQsaAlmS5-6trEuQ&usqp=CAU"
            alt="brace"
          ></img>
          <h2>Case Management</h2>
          <p>
            Our user-friendly software platform lets you view and manage your
            cases in real time and at each step
          </p>
        </div>

        <div className="mainpage__body__card">
          <img className="mainpage__body__image" src={Model} alt="brace"></img>
          <h2>3D Treatment Viewer</h2>
          <p>
            Configurable 3D viewer allows you and your patients to preview the
            treatment plan from start to finish
          </p>
        </div>
        <div className="mainpage__body__card">
          <img
            className="mainpage__body__image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfREzqca5V2NIIwA5LrmVOutV4ejx7X4aEg&usqp=CAU"
            alt="brace"
          ></img>
          <h2>Customizable Packaging </h2>
          <p>
            Packaging and accessories custom printed with your brand’s logo and
            artwork
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
