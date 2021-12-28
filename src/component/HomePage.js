import React from "react";
import "../css/homePage.css";
import Contact from "./Contact";
import Header from "./Header";
import MainPage from "./MainPage";

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <MainPage />
      <Contact />
    </div>
  );
}

export default HomePage;
