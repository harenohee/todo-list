import styled from "styled-components";

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const StContents = styled.div`
  position: relative;
  top: 50px;
  width: 600px;
  padding: 30px;
  background-color: #fff3fa;
  border-radius: 10px;
`;

const StBtn = styled.button`
  width: 140px;
  height: 30px;
  position: relative;
  float: right;
  border-style: none;
  border: 2px none;
  background-color: #f1d1e4;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    border: 2px solid #ec5e97;
  }
`;

const StP = styled.p`
  font-weight: 600;
  color: #53424c;
`;
const StSpan = styled.span`
  font-size: 18px;
  font-weight: 400;
`;
export { StDiv, StContents, StBtn, StP, StSpan };
