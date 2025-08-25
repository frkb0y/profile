import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arslen Mohamed </span>
            from <span className="purple"> Kelibia, Tunisia.</span>
            <br />
            I am a <span className="purple">Big Data Graduate</span> and{" "}
            <span className="purple">Software Developer</span>.
            <br />
            I love working on <span className="purple">web & mobile apps</span>, 
            exploring <span className="purple">data science</span>, and 
            turning ideas into products.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Get Competitive 
            </li>
            <li className="about-activity">
              <ImPointRight /> Party & Social 
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoying the Code Vibe 🚀
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference and enjoy the journey!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
