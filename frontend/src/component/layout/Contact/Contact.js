import React from "react";
import "./Contact.css";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:jeremiah.alvin18275@gmail.com">
        <Button>Contact: jeremiah.alvin18275@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;