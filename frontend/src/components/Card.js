import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdGroups } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

const CustomCard = () => {
  const cards = [
    {
      title: 'Total Employees',
      value: 4567,
      icon: <MdGroups style={{ height: "3rem", width: "3rem", color: "#4CAF50" }} />,
      bgColor: "#E8F5E9"
    },
    {
      title: 'Total Students',
      value: 123,
      icon: <MdGroups style={{ height: "3rem", width: "3rem", color: "#2196F3" }} />,
      bgColor: "#E3F2FD"
    },
    {
      title: 'Total Teachers',
      value: 123,
      icon: <MdGroups style={{ height: "3rem", width: "3rem", color: "#FF9800" }} />,
      bgColor: "#FFF3E0"
    },
    {
      title: 'Total Amount',
      value: 123,
      icon: <FaRupeeSign style={{ height: "3rem", width: "3rem", color: "#F44336" }} />,
      bgColor: "#FFEBEE"
    }
  ];

  return (
    <Container className="my-5">
      <Row className="d-flex justify-content-between">
        {cards.map((card, index) => (
          <Col key={index} xs={12} sm={6} lg={3} className="mb-4">
            <Card style={{ backgroundColor: card.bgColor, border: "none", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",width:'auto' }}>
              <Card.Body className="d-flex flex-column align-items-center text-center ">
                <div>{card.icon}</div>
                <h5 className="mt-3" style={{ fontWeight: "700" }}>{card.title}</h5>
                <h3 style={{ fontWeight: "700" }}>{card.value}</h3>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomCard;
