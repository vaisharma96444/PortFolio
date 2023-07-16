import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vaibhav Sharma </span>
            from <span className="purple"> Raigarh, India.</span>
            <br /> I am a computer science student at OP Jinal University, specializing in web development. With a passion
for creating innovative and user-friendly websites, 
<br/>I am dedicated to honing my skills in various web
technologies. Through my coursework and practical projects, I have gained experience in front-end
development using React, HTML, CSS, and JavaScript, as well as back-end development with languages
Nodejs , MongoDB
           
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Current Affairs
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "To create something that brings about change. !"{" "}
          </p>
          <footer className="blockquote-footer">Vaibhav Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;