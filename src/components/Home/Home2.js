import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            "Hello, my name is Vaibhav Sharma. I am a computer science student at OP Jinal University,"
              <br />
              <br/>
              <br />

                 
              specializing in web development. With a strong interest in building new &nbsp;
<i>
  <b className="purple">Web Technologies and Products </b> , {" "}
  
 
</i>
              I am passionate about creating innovative and user-friendly websites.<br/>
              <br/> 
              In my journey as a web developer, I have gained valuable experience in front-end development using
              <i>
                <b className="purple">  HTML, CSS, and JavaScript. </b>
              </i>
              I am proficient in 
              <i>
                <b className="purple">  ReactJS  </b>
              </i>
              and have expertise in using  <i>
                <b className="purple">  bootstrap </b>
                for responsive web design
              </i>
              <br/>
              <br />Additionally, I have explored back-end development, specifically using 
              <i>
                <b className="purple"> Node.js  </b>
              </i>
              as the runtime environment and 
              <i>
                <b className="purple"> Mongoose  </b>
              </i>
              as the object data modeling (ODM) library for 
              <i>
                <b className="purple"> MongoDB  </b>
              </i>
              This has enabled me to work with databases and develop robust server-side applications.
              <br />
            
              <br />
              <br />
              I am constantly seeking new opportunities to expand my knowledge and skills in the ever-evolving field of web development. With a keen eye for detail and a dedication to creating exceptional user experiences, I am excited to contribute my expertise to meaningful projects that push the boundaries of technology.


       
              <br/>
              <br/>
              <br/>
              <br/>
              <i>
                <b className="green"> Thank you for visiting my site, and I look forward to creating impactful web experiences together.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vaisharma96444"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/vaibhav-sharma-74745120a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;