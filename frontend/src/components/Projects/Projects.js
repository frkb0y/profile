import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import studentApp from "../../Assets/Projects/student-app-photo.png"; // <-- add a screenshot of your app here

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={studentApp} // <-- replace with an image of your app
              isBlog={false}
              title="Student Management App"
              description="A cross-platform application for managing students, courses, and grades. 
              Developed using .NET, Blazor, SSMS, GitHub, Figma, and ClickUp. 
              The app provides efficient data handling and a modern interface for school management."
              ghLink="https://github.com/frkb0y/student-manegment-app"
              // demoLink="https://your-demo-link.com" // if you have a demo, add it her
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
