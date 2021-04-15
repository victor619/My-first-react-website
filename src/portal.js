import React from "react";
import "./styles.css";
import Navigation from "./nav";
import Header from "./header";
import Section from "./section";
import Footer from "./footer";
function Mywebsite() {
  alert(
    `I know there are no buttons and images, I am yet to know how "a" and "img" tag work in react`
  );
  return (
    <div>
      <Navigation />
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default Mywebsite;
