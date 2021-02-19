import React from "react";
import styled from 'styled-components';









export default function Header(props) {
  const { nasaData } = props;

  return (
    <>
      <h1>NASA PHOTO OF THE DAY</h1>
      <div className="header">
        <h2>{nasaData.title}</h2>
      </div>
    </>
  );
}
