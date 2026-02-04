import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import studentApp from "../../Assets/Projects/student-app-photo.png";
import whether from "../../Assets/Projects/whether.png";
import tanitDashboard from "../../Assets/Projects/tanjat.png"; 
import dubaiDashboard from "../../Assets/Projects/DubaiD.png";
import houriaStock from "../../Assets/Projects/houriastock.png";
import tnGame from "../../Assets/Projects/tngame.png";


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
          {/* Khamsa w Khmis — Adult Edition */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={tnGame}
              isBlog={false}
              title="Khamsa w Khmis — Adult Edition"
              description="A mobile-first, RTL PWA party game in Arabic with a 5-second answer timer, lobby/consent flow, and localStorage persistence." 
              details="A fun, interactive party game inspired by the Tunisian classic. Players answer adult-themed questions under a 5-second countdown, collect cards, and rotate the asker each round."
              techStack={[
                "React 18",
                "TypeScript",
                "Vite",
                "vite-plugin-pwa",
                "Vitest",
                "CSS (RTL, mobile-first)",
                "localStorage"
              ]}
              howItWorks="The asker draws a card and selects a target. The target has 5 seconds to submit 3 distinct answers. If they succeed, they keep the card; otherwise the asker keeps it. The deck ends the game and the fewest cards wins."
              demoLink="https://tngames.netlify.app"
            />
          </Col>
          {/* Houria Bois Stock Management */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={houriaStock}
              isBlog={false}
              title="Houria Bois Stock Management"
              description="A stock management web app for a wood supplier, built with TypeScript and Supabase, deployed on Netlify."
              details="Designed to track inventory for a wood supplier with a clean, simple UI and fast data access."
              techStack={["TypeScript", "Supabase", "Netlify"]}
              howItWorks="The app manages inventory records backed by Supabase and is deployed as a static frontend on Netlify."
              demoLink="https://houria-bois.netlify.app"
            />
          </Col>
          {/* Student Management App */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={studentApp}
              isBlog={false}
              title="Student Management App"
              description="A cross-platform application for managing students, courses, and grades with a modern school management UI."
              details="Built to handle student records, course assignments, and grade tracking with efficient data handling."
              techStack={[".NET", "Blazor", "SSMS", "GitHub", "Figma", "ClickUp"]}
              howItWorks="A Blazor front end connects to a SQL Server database to create, update, and report on student, course, and grade data."
              ghLink="https://github.com/frkb0y/student-manegment-app"
              // demoLink="https://your-demo-link.com"
            />
          </Col>

{/* Dubai Sales Analytics Power BI Dashboard */}
<Col md={6} className="project-card">
  <ProjectCard
    imgPath={dubaiDashboard}
    isBlog={false}
    title="Dubai Sales Analytics Dashboard"
    description="A Power BI project analyzing retail sales across Dubai districts with interactive dashboards and DAX measures."
    details="Includes Sales Overview, Dubai Map Analysis, and Customer Insights dashboards with data cleaning and visual storytelling."
    techStack={["Power BI", "DAX"]}
    howItWorks="The report models sales data, uses DAX for measures, and presents interactive visuals to explore performance by district and customer segment."
    demoLink={require("../../Assets/Projects/Dubai sales dash.pbix")}     // this will download the PBIX file
  />
</Col>

          {/* TanitJobs Dashboard Enhancer Extension */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={tanitDashboard}
              isBlog={false}
              title="TanitJobs Dashboard Enhancer"
              description="A browser extension that adds a visual dashboard, filtering, search, and sorting to the TanitJobs applications page."
              details="Installable on Chrome/Opera to boost productivity and manage job applications with an enhanced UI."
              techStack={["JavaScript", "Browser Extension (Chrome/Opera)"]}
              howItWorks="The extension injects a dashboard UI into the TanitJobs page and enhances it with filtering, search, and sorting."
              ghLink="https://github.com/frkb0y/tanit-dashboard"
            />
          </Col>

               
          
       {/* Weather App Dashboard */}
<Col md={6} className="project-card">
  <ProjectCard
    imgPath={whether}
    isBlog={false}
    title="Weather Forecast Dashboard"
    description="A modern weather app to search any city and view live data with a clean, fast UI."
    details="Shows temperature, humidity, wind speed, and 7‑day forecasts with real API data."
    techStack={["Python", "FastAPI", "React"]}
    howItWorks="The FastAPI backend fetches weather data, and the React frontend displays current conditions and forecasts."
    ghLink="https://github.com/frkb0y/simple-whether-python"
   
  />
</Col>





        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;
