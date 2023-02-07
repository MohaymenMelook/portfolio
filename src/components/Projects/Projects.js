import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import data from "../../data/data.json";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
 const images = [leaf,emotion,editor,chatify]
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
          {data.map((project,index) => {
    return (
    <Col md={4} className="project-card" key ={index}>
    <ProjectCard
      imgPath={images[index]}
      isBlog={false}
      title={project.title}
      description={project.description}
      ghLink={project.gitHub}
      demoLink={project.demo}
    />
   </Col> )
             })}     
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
