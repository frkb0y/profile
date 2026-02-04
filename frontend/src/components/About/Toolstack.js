import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
  SiSupabase,
  SiNetlify
} from "react-icons/si";
import { FaServer } from "react-icons/fa"; // Placeholder for Laragon

function Toolstack() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiSupabase />, name: "Supabase" },
    { icon: <SiNetlify />, name: "Netlify" },
    { icon: <FaServer />, name: "Laragon" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, idx) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          key={tool.name}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{ position: "relative", cursor: "pointer" }}
        >
          {tool.icon}
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
              {tool.name}
            </div>
          )}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;