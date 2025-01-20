import React from "react";
import innerImage from "../../assets/windmill.jpg";
import styled from "styled-components";
import { stats } from "../../utils/utils";

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const Upper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 16px;
`;

const InnerImageContainer = styled.div`
  backdrop-filter: blur(5px); /* Apply blur effect */
  background-color: rgba(255, 255, 255, 0.2); /* Add a translucent layer */
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Links = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;
const Stats = styled.div`
  display: flex;
  background: white;
  color: black;
  justify-content: center;
`;
const Stat = styled.div`
  width: 33%;
`;

const InnerText = styled.div``;

const InnerImage = styled.img`
  margin: 12px;
  width: 260px;
  height: 200px;
`;

const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }

  &::after {
    content: "→"; /* Arrow icon */
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(4px); /* Move the arrow slightly on hover */
  }

  /* Underline Effect */
  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #007bff;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%; /* Full underline on hover */
  }
`;

const Banner = () => {
  return (
    <div>
      <Upper>
        <Text>
          <p>#1 Energy provider in the world</p>
          <h1>
            New Energy <br />
            for the Future
          </h1>
          <Links>
            <StyledLink
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </StyledLink>
            <StyledLink
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our services
            </StyledLink>
          </Links>
        </Text>
        <InnerImageContainer>
          <InnerImage src={innerImage} alt="windmill" />
          <InnerText>Discover our Recent Projects</InnerText>
        </InnerImageContainer>
      </Upper>
      <Bottom>
        <Stats>
          {stats.map((stat) => (
            <Stat>
              <h2>{stat.number}</h2>
              <p>{stat.desc}</p>
            </Stat>
          ))}
        </Stats>
      </Bottom>
    </div>
  );
};

export default Banner;
