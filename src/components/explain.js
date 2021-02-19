import React from 'react';
import styled from 'styled-components';



const StyledEx = styled.div`
width: 50%;

`



export default function Explain(props) {
  const { nasaData } = props;

  return (
    <StyledEx className="explain">
      <p>{nasaData.explanation}</p>
    </StyledEx>
  );
}
