import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Button from "../Button/Button";
import styled from "styled-components";
// import "./style.css";

export default function Form({ setTodos }) {
  //인풋으로 추가되는 타이틀
  const [todoTitle, setTodoTitle] = useState("");
  //인풋으로 추가되는 todo 내용
  const [todoContent, setTodoContent] = useState("");

  //인풋 value를 todoTitle으로 업데이트
  const handleChangeTitle = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleChangeContent = (event) => {
    setTodoContent(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();

    const todo = todoContent.trim();
    const title = todoTitle.trim();

    //   인풋 입력이 없으면 초기화
    if (!todo) {
      setTodoContent("");
      alert("할 일을 추가해주세요.");
      return;
    }
    if (!title) {
      setTodoTitle("");
      alert("제목이 빈칸이면 안됩니다.");
      return;
    }
    //prev는 현재 상태의 state!
    setTodos((prev) => [...prev, { todo, title, isDone: false, id: uuid() }]);
    setTodoContent("");
    setTodoTitle("");
  };

  return (
    <div>
      <StForm onSubmit={addTodo}>
        <StFormLabel>오늘은</StFormLabel>
        <StLabelText>제목</StLabelText>
        <StFormInput
          // className="form-input"
          type="text"
          id="todo-title"
          name="todo-title"
          onChange={handleChangeTitle}
          value={todoTitle}
        ></StFormInput>
        <StLabelText>내용</StLabelText>
        <StFormInput
          // className="form-input"
          type="text"
          id="todo-input"
          name="todo-input"
          onChange={handleChangeContent}
          value={todoContent}
        ></StFormInput>
        <Button value="하기"></Button>
      </StForm>
    </div>
  );
}

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
  color: #ffb9b9;
`;
const StLabelText = styled.label`
  margin-right: 10px;
  color: #ffb9b9;
  font-weight: 200px;
`;
const StFormInput = styled.input`
  outline: none;
  padding-left: 10px;
  position: relative;

  border-style: solid;
  border-radius: 10px;
  border-color: #ffddd2;
  margin-right: 30px;
  width: auto;
  height: 30px;
  font-size: 20px;

  &:focus,
  :hover {
    border-color: #ff8dc7;
  }
`;
// .form-input:focus,
// :hover {
//   border-color: #ff8dc7;
// }

// .form {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .form-label {
//   position: relative;
//   right: 40px;
//   font-size: 22px;
//   font-weight: bold;
//   color: #ffb9b9;
/* padding-right: 40px; */
// }
// .form-input {
//   outline: none;
//   padding-left: 10px;
//   position: relative;

//   border-style: solid;
//   border-radius: 10px;
//   border-color: #ffddd2;
//   margin-right: 30px;
//   width: auto;
//   height: 30px;
//   font-size: 20px;
// }
// .label-text {
//   margin-right: 10px;
//   color: #ffb9b9;
//   font-weight: 200px;
// }
// .form-btn {
//   background-color: #ffddd2;
//   border-style: none;
//   border: 2px none;
//   border-radius: 5px;
//   color: white;
//   font-size: 14px;
//   font-weight: bold;
//   cursor: pointer;
//   margin: 3px;
// }
// .form-btn:hover {
//   border: 2px solid #ffacc7;
// }
