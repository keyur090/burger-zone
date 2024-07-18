import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";


function Section1() {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col className="mb-5 mb-lg-0" lg={7}>
            <div className="position-relative">
              <img src={Burger} className="img-fluid" alt="Hero"></img>
              <div className="price_badge">
              <div className="badge_text">
                <h4 className="h4_xs">Only</h4>
                <h4 className="h3_lg">$9.99</h4>
              </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New Burger</h1>
              <h4 className="text-white">With Onion</h4>
              <p className="text-white pt-2 pb-4">
              A delicious burger topped with grilled onions, featuring a juicy patty, melted cheese, fresh lettuce, and a toasted bun.
              </p>
              <Link to='/' className="btn order_now">
               Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section1;
