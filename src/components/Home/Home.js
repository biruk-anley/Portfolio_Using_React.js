import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/me.PNG";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Typet from './Type';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                I'M Biruk Anley
              </h1>

              <h6>
                <Type />
              </h6>   
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
