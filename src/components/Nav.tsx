import React from "react";
import logo from '../assets/logo.png';
import Button from "@mui/material/Button";
import styled from "styled-components";

const StyledImage=styled.img`
    height: 50px;
    width: 150px;
`

const NavContainer=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
`

const NavLinks=styled.nav`
    display: flex;
    gap: 12px;
`

const ButtonsContainer=styled.div`
`

const Nav = () => {
  return (
    <NavContainer>
      <div>
        <StyledImage src={logo} alt="logo" />
      </div>
      <NavLinks>
        <div>Home</div>
        <div>About us</div>
        <div>Features</div>
        <div>Services</div>
        <div>Contact</div>
      </NavLinks>
      <ButtonsContainer>
        <Button>Log in</Button>
        <Button variant="contained">Get in Touch</Button>
      </ButtonsContainer>
    </NavContainer>
  );
};

export default Nav;
