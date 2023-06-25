import { Col } from "react-bootstrap";

function ProjectCard({ title, description, imgUrl, URL = "#home" }) {
  const redirectURL = (URL) => {
    window.location.assign(URL);
  };

  return (
    <Col size={12} sm={6} md={4} onClick={() => redirectURL(URL)}>
      <div className="proj-imgbx">
        <img src={imgUrl}></img>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
