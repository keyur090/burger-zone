import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Discover our gourmet burgers, featuring succulent, handcrafted patties topped with fresh ingredients. Each bite is a burst of flavor, combining melted cheese, crispy lettuce, and ripe tomatoes, all nestled in a perfectly toasted bun. Taste the difference!`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Savor our gourmet burgers, made with juicy, handcrafted patties and fresh, high-quality ingredients. Each burger is a flavor explosion, featuring melted cheese, crisp veggies, and a perfectly toasted bun. Experience the ultimate satisfaction with every bite!`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Indulge in our gourmet burgers, crafted with juicy, premium beef patties and topped with fresh ingredients. Each bite offers a perfect blend of flavors, from crispy lettuce to melted cheese, all nestled in a toasted, artisan bun. Taste perfection!`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
              A mouthwatering burger featuring a juicy beef patty, melted cheese, fresh lettuce, ripe tomato, crispy bacon, tangy pickles, and a soft, toasted bun, bursting with flavor.
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;