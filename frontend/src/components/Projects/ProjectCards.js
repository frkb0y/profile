import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  const techStack = Array.isArray(props.techStack) ? props.techStack : [];
  return (
    <>
      <Card className="project-card-view" onClick={handleOpen} style={{ cursor: "pointer" }}>
<Card.Img
  variant="top"
  src={props.imgPath}
  alt="card-img"
  style={{ width: "50%", maxHeight: "200px", objectFit: "contain", margin: "0 auto" }}
/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <>
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              onClick={(event) => event.stopPropagation()}
            >
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
            {"\n"}
            {"\n"}
          </>
        )}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
            onClick={(event) => event.stopPropagation()}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>

    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="xl"
      dialogClassName="project-modal"
      backdropClassName="project-modal-backdrop"
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="align-items-start">
          <Col md={9} style={{ marginBottom: "16px" }}>
            {props.imgPath && (
              <img
                src={props.imgPath}
                alt={props.title}
                style={{ width: "100%", height: "100%", maxHeight: "900px", objectFit: "contain" }}
              />
            )}
          </Col>
          <Col md={3}>
            {props.details && <p>{props.details}</p>}
            {techStack.length > 0 && (
              <>
                <h6>Tech Stack</h6>
                <ul>
                  {techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </>
            )}
            {props.howItWorks && (
              <>
                <h6>How it works</h6>
                <p>{props.howItWorks}</p>
              </>
            )}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}
export default ProjectCards;
