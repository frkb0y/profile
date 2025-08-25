import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import { SiGmail } from "react-icons/si";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
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
              I am <b className="purple">Arslen Mohamed</b>, a 
              <b className="purple"> Software Developer </b> and 
              <b className="purple"> Big Data student</b> from Tunisia.
              <br />
              <br />
              I enjoy building <i><b className="purple">web and mobile applications</b></i>, 
              working with both frontend and backend technologies.
              <br />
              <br />
              I have hands-on experience with
              <i>
                <b className="purple"> Angular, React, Node.js, .NET, Flutter, and Spring Boot </b>
              </i>
              as well as working with databases like
              <i>
                <b className="purple"> MongoDB, MySQL, and SQLite.</b>
              </i>
              <br />
              <br />
              Beyond development, I am passionate about 
              <i><b className="purple"> Data Science and Big Data</b></i>. 
              I work with tools such as
              <i>
                <b className="purple"> Python, Pandas, NumPy, Matplotlib, Scikit-learn, and SQL </b>
              </i>
              to analyze data, build predictive models, and deliver insights.
              <br />
              <br />
              My main interests include developing 
              <i>
                <b className="purple"> innovative web solutions, cross-platform apps, </b>
              </i>
              and exploring areas of{" "}
              <b className="purple"> Big Data, AI, and predictive analytics.</b>
              <br />
              <br />
              I love turning ideas into real products, whether it's{" "}
              <b className="purple">e-commerce platforms, document systems,</b> 
              or even <b className="purple">creative digital projects powered by data.</b>
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
                  href="https://github.com/frkb0y" // replace with your GitHub username
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arslen-mohamed" // replace with your LinkedIn
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:arslenmohamed2001@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/arslen.007/?hl=fr" // if you want to share Instagram
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
