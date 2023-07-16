import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Chat-App.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/File-Sharing.png";
import Foodrecipe from "../../Assets/Projects/Food-recipeimg.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/Gmail-Clone.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Foodrecipe}
              isBlog={false}
              title="Food-recipe"
              description=" MERN-based food recipe app offers a delightful culinary experience. Explore a variety of delicious recipes, create custom collections, and share your favorites effortlessly. With a user-friendly interface, seamless navigation, and real-time updates, cooking has never been more enjoyable. Unleash your inner chef and discover a world of flavors with our visually captivating food recipe app."
              ghLink="https://github.com/vaisharma96444/Food-recipe"
              demoLink="https://food-recipe-lac.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Gmail-Clone"
              description="Gmail clone frontend built with Semantic UI and React. Experience seamless email management with features like composing, organizing, and searching emails. The intuitive design and smooth user experience make staying connected easier than ever. Stay organized and efficient with our user-friendly Gmail clone frontend."
              ghLink="https://github.com/vaisharma96444/Gmail-Front-end"
              demoLink="https://gmail-front-end.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="File-Sharing"
              description=" file sharing with the innovative web application I have built using React, Node.js, Express, and MongoDB. The robust architecture ensures secure and efficient file transfers. Share files effortlessly, manage permissions, and collaborate with ease. Discover a user-friendly interface that simplifies the file sharing process. Enhance your productivity and streamline your workflow with my file sharing platform."
              ghLink="https://github.com/vaisharma96444/File-Sharing-Backend"
              demoLink="https://file-sharing-rosy.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Chat-App"
              description="My chat app is a real-time messaging platform built with HTML, CSS, Node.js, and Socket.io. It enables instant and interactive communication between users, creating a seamless chatting experience. With its simple and intuitive design, users can engage in smooth conversations and stay connected in real-time."
              ghLink="https://github.com/vaisharma96444/Chat-App"
              demoLink="https://chat-app-hazel-alpha.vercel.app/"
            />
          </Col>

        

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;