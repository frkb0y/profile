import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";

// Import both CVs
import webDevCV from "../../Assets/web dev cv.pdf";
import dataScienceCV from "../../Assets/cv data.pdf";

import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [selectedCV, setSelectedCV] = useState(null); // null = choose screen

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // ===== SCREEN 1: Choose CV =====
  if (!selectedCV) {
    return (
      <Container
        fluid
        className="resume-section d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Particle />

        <h2 className="mb-4" style={{ color: "white" }}>
          Choose your Resume:
        </h2>

        <div className="d-flex gap-4">
          <Button
            variant="primary"
            style={{ width: "200px" }}
            onClick={() => setSelectedCV(webDevCV)}
          >
            Web Developer CV
          </Button>

          <Button
            variant="success"
            style={{ width: "200px" }}
            onClick={() => setSelectedCV(dataScienceCV)}
          >
            Data Science CV
          </Button>
        </div>
      </Container>
    );
  }

  // ===== SCREEN 2: Show Selected CV =====
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={selectedCV}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF Viewer */}
        <Row className="resume">
          <Document file={selectedCV} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* Buttons: Download & Switch Back */}
        <Row
          className="d-flex justify-content-center mt-4"
          style={{ gap: "20px" }}
        >
          <Button
            variant="primary"
            href={selectedCV}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>

          <Button
            variant="secondary"
            style={{ maxWidth: "250px" }}
            onClick={() => setSelectedCV(null)}
          >
            ← Choose another CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
