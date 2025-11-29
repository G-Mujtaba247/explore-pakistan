import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import servicesData from "../home/cardsData/servicesData.js";

export default function ServiceCard() {
  return (
    <>
      {servicesData.map((item) => (
        <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary">{item.buttonText}</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}
