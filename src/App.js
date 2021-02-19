import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Main from "./components/Main";
import Header from "./components/Header";
import Explain from "./components/explain";
import styled from "styled-components";

const StyledApp = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
color: white;
`;

function App() {
  const [nasaData, getNasaData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=aaW8iViA2MVle3RaEeOwedhn9e8bY2SKFUeceL6j"
      )
      .then((res) => getNasaData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <StyledApp>
      <Header nasaData={nasaData} />
      <Main nasaData={nasaData} />
      <Explain nasaData={nasaData} />
    </StyledApp>
  );
}

export default App;
