import React from "react";
import bakerylogo2 from "../app/assets/images/bakerylogo2.jpg";

const About = () => {
  return (
    <div className="about-us-story">
      <h2 className="about-us">About Us</h2>
      <p className="story">
        We are a family-owned bakery recently featured on the hit show, "Shark
        Tank."&nbsp; &nbsp;Decadent Bakery's humble beginnings started in 1990
        in a small kitchen in Portsmouth, Virginia, filled with family, love and
        great family recipes.&nbsp; &nbsp;With customers like you, we can
        continue our tradition of great food and smiles around the dinner
        table.&nbsp; &nbsp;Please follow us on our social media pages for new
        products, prizes and discounts and don't forget to share the goodies!
      </p>
      <img style={{ width: 180 }} src={bakerylogo2} alt="bakerylogo2" />
    </div>
  );
};
//&nbsp; adds additional space after a period
export default About;
