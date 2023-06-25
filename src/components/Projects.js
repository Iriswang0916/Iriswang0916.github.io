import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/proj1.png";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/graphicDesign.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Projects() {
  const projects = [
    {
      title: "Plant Commercial Website",
      description: "Javascript Cart Develop",
      imgUrl: projImg1,
      URL: "https://iriswang0916.github.io/plants/",
    },
    {
      title: "Anime Website Design",
      description: "CSS & HTML",
      imgUrl: projImg2,
      URL: "https://iriswang0916.github.io/animeweb/",
    },
    {
      title: "Graphic Icon Design",
      description: "Illustrator Project",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    During my academic journey, I have had the opportunity to
                    work on various projects, primarily focused on my
                    coursework. While these projects were assigned by my school,
                    I approached each one with enthusiasm and dedicated myself
                    to giving my best effort. Despite their academic nature, I
                    consider these projects as valuable learning experiences
                    that have contributed significantly to my growth as a web
                    developer.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Waiting for Future Projects</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Waiting for Future Projects</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}

export default Projects;
