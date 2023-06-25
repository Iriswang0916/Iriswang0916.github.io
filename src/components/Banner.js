import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import headerImg from "../assets/img/char.png";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setDeleting] = useState(false);
  const toRotate = ["Web development", "Web design", "Internet Application"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="banner-col-1">
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              Hi I'm Yi <br /> I study <span className="wrap">{text}|</span>
            </h1>
            <p>
              As a web development and internet application student, I possess a
              diverse skill set in web design, front-end development, and
              graphic design. With a keen interest in studying coding-related
              knowledge, I am constantly seeking opportunities to enhance my
              skills and expand my horizons. Known for my hardworking nature and
              positive attitude, I approach every project with dedication and a
              drive for excellence. I am always eager to learn new things and
              embrace challenges, as I believe continuous improvement is the key
              to success in the rapidly evolving field of technology.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Heardder Img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
