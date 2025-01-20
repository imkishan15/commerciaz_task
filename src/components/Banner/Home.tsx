import React from "react";
import backgroundImage from "../../assets/farm.jpg";
import Banner from "./Banner";
import Quality from "./Quality";
import styled from "styled-components";

const BannerContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.9;
  height: 100%;
  width: 96%;
  color: white;
  margin: 0 2%;
`;

const QualityContainer = styled.div``;

const Home = () => {
  return (
    <div>
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <QualityContainer>
        <Quality />
      </QualityContainer>
    </div>
  );
};

export default Home;
