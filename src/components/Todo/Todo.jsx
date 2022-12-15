import React from "react";
import Button from "../Button/Button";
import "./style.css";
export default function Todo({ todo, title, isDone, id, setTodos }) {
  //todo 제거 함수
  const deleteTodo = () => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // cancelTodo와 doneTodo에 setTodos((prev) =>{} 왜 중괄호를 쓰면 에러가 날까!
  //setTodo안에는 하나의 리턴만 받는다.
  //   todo 취소 함수
  const cancelTodo = () => {
    setTodos((prev) => {
      return prev.map((t) => {
        if (t.id === id) {
          return { ...t, isDone: false };
        }
        return t;
      });
    });
  };
  // todo 완료 함수
  const doneTodo = () => {
    setTodos((prev) => {
      return prev.map((t) => {
        if (t.id === id) {
          return { ...t, isDone: true };
        }
        return t;
      });
    });
  };

  return (
    <li className="todo-card" id={id} key={id}>
      {/* 상세페이지로 이동하는 부분 */}
      <span>상세보기</span>
      <p className="todo-card-title">{title}</p>
      <p className="todo-card-content">{todo}</p>
      <div className="todo-card-btn">
        <Button handleClick={deleteTodo} value="삭제"></Button>
        {isDone ? (
          <Button handleClick={cancelTodo} value="취소" />
        ) : (
          <Button handleClick={doneTodo} value="완료" />
        )}
      </div>
    </li>
  );
}
