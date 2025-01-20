import { color } from "@mui/system";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #111;
  color: #fff;
  padding: 5rem 5em;
  /* text-align: center; */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #fff;
  color: #111;
  border: none;
  border-radius: 5px;
  padding: 1rem 2rem;
  cursor: pointer;
`;

const FeaturesContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const Feature = styled.div`
  margin: 0 1rem;
  display: flex;
`;

const CheckIcon = styled.span`
  margin-right: 0.5rem;
  color: #00ff00;
`;

const FeatureText = styled.span`
  font-size: 1.1rem;
`;

const Footer = styled.footer`
  background-color: #111;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
  font-size: 0.8rem;
`;

const Logo = styled.div`
  margin-bottom: 1rem;
`;

const Top = styled.div`
  display: flex;
`;

const Pages = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  margin-top: 36px;
  padding-bottom: 16px;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 8px;
  font-size: 20px;
`;

const CopyRight = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  font-size: 18px;
`;

const SocialIcons = styled.div`
  margin-top: 1rem;

  a {
    margin: 0 0.5rem;
    color: #fff;
  }
`;

const Contact: React.FC = () => {
  return (
    <Container>
      <Top>
        <div>
          <Title>
            It's time to support zero pollution, with renewable resources
          </Title>
          <FeaturesContainer>
            <Feature>
              <CheckIcon>✓</CheckIcon>
              <FeatureText>Experienced for more than 10 years</FeatureText>
            </Feature>
            <Feature>
              <CheckIcon>✓</CheckIcon>
              <FeatureText>Support for the latest technology</FeatureText>
            </Feature>
          </FeaturesContainer>
        </div>
        <div>
          <Description>
            By increasing the effectiveness and efficiency of electricity use,
            the use of renewable resources is very profitable for all industrial
            services.
          </Description>
          <Button>Get in touch</Button>
        </div>
      </Top>

      <Footer>
        <Pages>
          <Logo>Xurya</Logo>
          <Nav>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/features">Features</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </Nav>
          <SocialIcons>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </SocialIcons>
        </Pages>
        <CopyRight>
          <p>&copy; 2024 Xurya Inc. All rights reserved.</p>
          <p>
            <Link href="/terms">Terms of Service</Link> &nbsp;&nbsp;&nbsp;
            <Link href="/privacy">Privacy Policy</Link>
          </p>
        </CopyRight>
      </Footer>
    </Container>
  );
};

export default Contact;
