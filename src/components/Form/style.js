import styled from "styled-components";
const StForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StFormLabel = styled.label`
  position: relative;
  right: 40px;
  font-size: 22px;
  font-weight: bold;
  color: #ffacc7;
`;
const StLabelText = styled.label`
  margin-right: 10px;
  color: #ffacc7;
  font-weight: 200px;
`;
const StFormInput = styled.input`
  outline: none;
  padding-left: 10px;
  position: relative;

  border-style: solid;
  border-radius: 10px;
  border-color: #f1d1e4;
  margin-right: 30px;
  width: auto;
  height: 30px;
  font-size: 20px;
  &:focus,
  :hover {
    border-color: #ec5e97;
  }
`;

export { StForm, StFormInput, StFormLabel, StLabelText };
