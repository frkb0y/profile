import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiJavascript1, DiJava, DiNodejs, DiPhp } from "react-icons/di";
import { SiMysql, SiMongodb, SiReact, SiFastapi, SiAngular, SiExpress, SiDart, SiFlutter, SiHtml5, SiCss3, SiCsharp } from "react-icons/si";

const techs = [
  { icon: <DiPython />, name: "Python" },
  { icon: <SiMysql />, name: "SQL" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiCss3 />, name: "CSS3" },
  { icon: <DiPhp />, name: "PHP" },
  { icon: <DiJava />, name: "Java" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiFastapi />, name: "FastAPI" },
  { icon: <SiAngular />, name: "Angular" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiDart />, name: "Dart" },
  { icon: <SiCsharp />, name: "C#" },
  { icon: <SiFlutter />, name: "Flutter" },
];

function Techstack() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, idx) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          key={tech.name}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{ position: "relative", cursor: "pointer" }}
        >
          {tech.icon}
          {hoveredIndex === idx && (
            <div
              style={{
                position: "absolute",
                top: "5px",
                left: "50%",
                transform: "translateX(-50%)",
                minWidth: "90px",
                padding: "10px 18px",
                background: "rgba(30, 30, 30, 0.6)",
                color: "#fff",
                borderRadius: "16px",
                fontWeight: "bold",
                fontSize: "0.3em",
                textAlign: "center",
                backdropFilter: "blur(6px)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
                
                pointerEvents: "none",
              }}
            >
              {tech.name}
            </div>
          )}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;