import React from "react";
import styled from "styled-components";
import solarImage from "../../assets/solar.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  width: 200px;
`;

const ServiceTitle = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
`;

const ViewDetailsButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
`;

const ServiceCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImageContainer = styled.div``;

const MainContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 2% auto;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 400px;
  border-radius: 16px;
`;

const Service2: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Solar panels for home",
    },
    {
      id: 2,
      title: "Solar panels for industry",
    },
    {
      id: 3,
      title: "Solar panels for chargers",
    },
    {
      id: 4,
      title: "Wind power generator",
    },
  ];

  return (
    <MainContainer>
      <Container>
        <Title>Trusted service, for your various needs</Title>
        <Button>Get in touch</Button>
        <ServiceCardsContainer>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ViewDetailsButton>View Details</ViewDetailsButton>
            </ServiceCard>
          ))}
        </ServiceCardsContainer>
      </Container>
      <ImageContainer>
        <StyledImage src={solarImage} alt="solar" />
      </ImageContainer>
    </MainContainer>
  );
};

export default Service2;
