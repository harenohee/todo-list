import React from "react";
// import "./style.css";
import styled from "styled-components";

export default function Button({ handleClick, value }) {
  return <Stbtn onClick={handleClick}>{value}</Stbtn>;
}

const Stbtn = styled.button`
  width: 50px;
  height: 40px;
  border-style: none;
  border: 2px none;
  background-color: #ffddd2;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin: 3px;
  &:hover {
    border: 2px solid #ffacc7;
  }
`;
