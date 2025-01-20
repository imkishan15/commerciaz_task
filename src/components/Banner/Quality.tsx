import React from "react";
import styled from "styled-components";
import LogoImage from "../../assets/qualitylogo.png";

const Text = styled.div``;
const Logos = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
  padding-bottom: 5%;
`;
const Logo = styled.div`
  background: #d7d7d7;
  border-radius: 100%;
  width: fit-content;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  &:hover {
    background: #ededed;
    cursor: pointer;
  }
`;
const LogoImg = styled.img`
  height: 50px;
  width: 120px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-right: 2rem;
`;

const Description = styled.p`
  color: #888;
  font-size: 1rem;
`;

const Quality = () => {
  const logos = new Array(5).fill(null);
  return (
    <div>
      <Container>
        <Title>Focusing on quality, we maintain customer trust</Title>
        <Description>
          We ensure that every installation we build has strict quality checks.
          Sustainable solutions for an environmentally friendly and renewable
          future.
        </Description>
      </Container>
      <Logos>
        {logos.map((_, index) => (
          <Logo>
            <LogoImg src={LogoImage} alt="logo" />
          </Logo>
        ))}
      </Logos>
    </div>
  );
};

export default Quality;
