import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import webDevCV from "../../Assets/web dev cv.pdf";
import dataSciCV from "../../Assets/cv data.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [selectedCV, setSelectedCV] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {!selectedCV && (
          <Row style={{ justifyContent: "center", gap: "20px", marginTop: "40px" }}>
            <Button variant="primary" onClick={() => setSelectedCV(webDevCV)}>
              Web Developer CV
            </Button>
            <Button variant="success" onClick={() => setSelectedCV(dataSciCV)}>
              Data Scientist CV
            </Button>
          </Row>
        )}

        {selectedCV && (
          <>
            <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
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

            <Row className="resume">
              <Document file={selectedCV} className="d-flex justify-content-center">
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              </Document>
            </Row>

            <Row style={{ justifyContent: "center", position: "relative", marginBottom: "40px" }}>
              <Button
                variant="secondary"
                onClick={() => setSelectedCV(null)}
                style={{ maxWidth: "250px" }}
              >
                Choose Another CV
              </Button>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
}

export default ResumeNew;
