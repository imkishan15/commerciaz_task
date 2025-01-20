import React from "react";
import styled from "styled-components";
import carImage from "../../assets/car.jpg";

const Container = styled.div`
  margin: 5rem 0;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  border-radius: 12px;
  margin: auto;
  padding: 2rem;
  background: #ececec;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const Quote = styled.blockquote`
  /* font-style: italic; */
  margin-bottom: 1rem;
  margin: 0;
  margin-right: 10%;
  font-size: 18px;
`;

const Author = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
  display: flex;
  /* justify-content: end; */
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 1rem 2rem;
  cursor: pointer;
  margin-top: 2em;
`;

const ImageContainer = styled.div`
  width: 60%;
  position: relative;
`;

const Image = styled.img`
  width: 500px;
  height: auto;
  border-radius: 16px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const OverlayText = styled.p`
  color: #fff;
  font-size: 1.2rem;
`;

const ImageContain: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <ImageContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={carImage} alt="Solar Carport" />
      <Overlay style={{ opacity: isHovered ? 1 : 0 }}>
        <OverlayText>Electric car charging station</OverlayText>
      </Overlay>
    </ImageContainer>
  );
};

const Service3: React.FC = () => {
  return (
    <Container>
      <Title>See how we solve problems, right on target</Title>
      <TextContainer>
        <div>
            <h2>Medtronic</h2>
          <Quote>
            "We have used services from Xurya for most of our stations, this is
            our strategic step to continue to increase the number of solar panel
            usage for our stations, we are very satisfied with the services from
            Xurya."
          </Quote>
          <Button>View case study</Button>
          <Author>Jennifer Kolobaly - CTO EV Medtronic</Author>
        </div>
        <ImageContain />
      </TextContainer>
    </Container>
  );
};

export default Service3;
