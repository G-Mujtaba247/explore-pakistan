"use client";

import { Button, Col, Container, Row } from "react-bootstrap";
import HomeSlider from "../components/home/HomeSlider";
import SectionHeading from "../components/SectionHeading";
import WebLayout from "../layout/WebLayout";
import ServiceCard from "../components/home/ServiceCard";

export default function Page() {
  return (
    <WebLayout>

      {/* Slider Section */}
      <section className="page-section">
        <HomeSlider />
      </section>

      {/* Services */}
      <section className="page-section">
        <Container fluid="md">
          <SectionHeading title="Services" />
          <ServiceCard />  {/* renders all cards with your own sizing */}
        </Container>
      </section>

      {/* Teams */}
      <section className="page-section">
        <Container fluid="md">
          <SectionHeading title="Teams" />
          <ServiceCard />
        </Container>
      </section>

      {/* Reviews */}
      <section className="page-section">
        <Container fluid="md">
          <SectionHeading title="Reviews" />
          <ServiceCard />
        </Container>
      </section>

      {/* Appointment Section */}
      <SectionHeading title="Need an Appointment?" />

      <section className="bg-gray">
        <Container fluid="md">
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <h3>Book your appointment today</h3>
            </Col>
            <Col xs={12} md={6} className="text-end">
              <Button variant="success">Book Appointment</Button>
            </Col>
          </Row>
        </Container>
      </section>

    </WebLayout>
  );
}
