import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 50px;
  background-color: #f7f9fa; /* Matches the light background */
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 10px;

  span {
    color: #007bff; /* Highlighted text color */
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column for small screens */
  }
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Slight lift on hover */
  }
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #eaf6f1; /* Light background for icons */
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const Services = () => {
  const cards = [
    {
      icon: "📚",
      title: "Layered security",
      description:
        "With layered security, we ensure the safety of every unit we provide.",
    },
    {
      icon: "✔️",
      title: "Quality control of each part",
      description: "Every unit you send is checked carefully for every detail.",
    },
    {
      icon: "💬",
      title: "Reliable customer service",
      description:
        "Our customer service is available 24 hours a week, with qualified people.",
    },
    {
      icon: "📘",
      title: "Maintenance manual book",
      description:
        "We provide a guidebook that can be used to ensure maximum care.",
    },
    {
      icon: "📦",
      title: "Delivered safely",
      description:
        "Every unit we send arrives safely and quickly, without any obstacles or drama.",
    },
    {
      icon: "🤖",
      title: "Based on artificial intelligence",
      description:
        "You can control and view each unit from your phone, it’s very easy to use.",
    },
  ];

  return (
    <Container>
      <Title>
        We offer <span>quality</span>, with the best materials and service
      </Title>
      <Subtitle>
        High standards and attention to detail are our priority.
      </Subtitle>
      <Grid>
        {cards.map((card, index) => (
          <Card key={index}>
            <Icon>{card.icon}</Icon>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
