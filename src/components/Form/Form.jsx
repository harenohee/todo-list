import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Button from "../Button/Button";
import "./style.css";

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
    <div className="form-container">
      <form className="form" onSubmit={addTodo}>
        <label className="form-label">오늘은</label>
        <label className="label-text">제목</label>
        <input
          className="form-input"
          type="text"
          id="todo-title"
          name="todo-title"
          onChange={handleChangeTitle}
          value={todoTitle}
        ></input>
        <label className="label-text">내용</label>
        <input
          className="form-input"
          type="text"
          id="todo-input"
          name="todo-input"
          onChange={handleChangeContent}
          value={todoContent}
        ></input>
        <Button value="하기"></Button>
      </form>
    </div>
  );
}
