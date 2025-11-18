import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import studentApp from "../../Assets/Projects/student-app-photo.png";
import whether from "../../Assets/Projects/whether.png";
import tanitDashboard from "../../Assets/Projects/tanjat.png"; 
import dubaiDashboard from "../../Assets/Projects/DubaiD.png";


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

               
          
       {/* Weather App Dashboard */}
<Col md={6} className="project-card">
  <ProjectCard
    imgPath={whether}
    isBlog={false}
    title="Weather Forecast Dashboard"
    description="A modern weather application that allows you to search any city and instantly view accurate weather data, including temperature, humidity, wind speed, and 7-day forecasts.  
    Built with Python (FastAPI) for the backend and React for the frontend.  
    Clean UI, real API data, and fast performance — designed for everyday use."
    ghLink="https://github.com/frkb0y/simple-whether-python"
   
  />
</Col>


{/* Dubai Sales Analytics Power BI Dashboard */}
<Col md={6} className="project-card">
  <ProjectCard
    imgPath={dubaiDashboard}
    isBlog={false}
    title="Dubai Sales Analytics Dashboard"
    description="An end-to-end Power BI project analyzing retail sales performance across Dubai districts. 
    Includes interactive dashboards: Sales Overview, Dubai Map Analysis, and Customer Insights.
    Features data cleaning, DAX measures, and visual storytelling."
    demoLink={require("../../Assets/Projects/Dubai sales dash.pbix")}     // this will download the PBIX file
  />
</Col>


        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;
