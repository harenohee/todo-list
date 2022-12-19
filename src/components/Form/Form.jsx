import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../../redux/modules/todos";
import Button from "../Button/Button";
import { StForm, StFormInput, StFormLabel, StLabelText } from "./style.js";

export default function Form({ setTodos }) {
  //인풋으로 추가되는 타이틀
  const [title, setTitle] = useState("");
  //인풋으로 추가되는 todo 내용
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();
  // store 조회 useSelector
  // const todos = useSelector((state) => state.todos);

  //인풋 value를 title으로 업데이트
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeContent = (event) => {
    setContents(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    //   인풋 입력이 없으면 초기화
    if (!contents) {
      setContents("");
      alert("할 일을 추가해주세요.");
      return;
    }
    if (!title) {
      setTitle("");
      alert("제목이 빈칸이면 안됩니다.");
      return;
    }
    const newTodo = {
      title,
      contents,
      isDone: false,
      id: uuid(),
    };
    // 새로운 todo를 추가하는 reducer 호출
    dispatch(addTodo(newTodo));
    setTitle("");
    setContents("");
  };
  // const addTodo = (event) => {
  //   event.preventDefault();

  //   const todo = todoContent.trim();
  //   const title = todoTitle.trim();

  //   //   인풋 입력이 없으면 초기화
  //   if (!todo) {
  //     setTodoContent("");
  //     alert("할 일을 추가해주세요.");
  //     return;
  //   }
  //   if (!title) {
  //     setTodoTitle("");
  //     alert("제목이 빈칸이면 안됩니다.");
  //     return;
  //   }
  //   //prev는 현재 상태의 state!
  //   setTodos((prev) => [...prev, { todo, title, isDone: false, id: uuid() }]);
  //   setTodoContent("");
  //   setTodoTitle("");
  // };

  return (
    <div>
      <StForm onSubmit={handleOnSubmit}>
        <StFormLabel>오늘은</StFormLabel>
        <StLabelText>제목</StLabelText>
        <StFormInput
          // className="form-input"
          type="text"
          id="todo-title"
          name="todo-title"
          onChange={handleChangeTitle}
          value={title}
        ></StFormInput>
        <StLabelText>내용</StLabelText>
        <StFormInput
          // className="form-input"
          type="text"
          id="todo-input"
          name="todo-input"
          onChange={handleChangeContent}
          value={contents}
        ></StFormInput>
        <Button value="하기"></Button>
      </StForm>
    </div>
  );
}
