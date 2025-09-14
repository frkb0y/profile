import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import studentApp from "../../Assets/Projects/student-app-photo.png";
import tanitDashboard from "../../Assets/Projects/tanjat.png"; // <-- add a screenshot of your extension

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
          {/* Student Management App */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={studentApp}
              isBlog={false}
              title="Student Management App"
              description="A cross-platform application for managing students, courses, and grades. 
              Developed using .NET, Blazor, SSMS, GitHub, Figma, and ClickUp. 
              The app provides efficient data handling and a modern interface for school management."
              ghLink="https://github.com/frkb0y/student-manegment-app"
              // demoLink="https://your-demo-link.com"
            />
          </Col>
          
          {/* TanitJobs Dashboard Enhancer Extension */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={tanitDashboard}
              isBlog={false}
              title="TanitJobs Dashboard Enhancer"
              description="A browser extension for TanitJobs that adds a visual dashboard, advanced filtering, search, and sorting features to your job applications page.
              Install it in Chrome/Opera to boost your productivity and easily manage your job hunt.
              Built with JavaScript and designed for seamless integration."
              ghLink="https://github.com/frkb0y/tanit-dashboard"
              demoLink="https://addons.opera.com/en-gb/extensions/details/TanitJobs"
            />
          </Col>

        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;