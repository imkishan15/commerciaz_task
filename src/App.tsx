import styled from "styled-components";
import Nav from "./components/Nav";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Home from "./components/Banner/Home";
import Service2 from "./components/Services/Service2";
import Service3 from "./components/Services/Service3";

const Container = styled.div``;

function App() {
  return (
    <Container>
      <Nav />
      <Home />
      {/* <Features /> */}
      <Services />
      <Service2 />
      <Service3 />
      <Contact />
    </Container>
  );
}

export default App;
