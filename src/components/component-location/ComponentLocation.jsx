// ComponentLocation.jsx
import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import "./ComponentLocation.scss";

export default function ComponentLocation() {
  return (
    <section className="component-location">
      <div className="container-location">
        <div className="map-side">
          <ContactInfo />
        </div>
        <div className="form-side">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}