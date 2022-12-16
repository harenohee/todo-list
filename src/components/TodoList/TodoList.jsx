import React from "react";
import Todo from "../Todo/Todo";
// import "./style.css";
import styled from "styled-components";
export default function TodoList({ isActive, todos, setTodos }) {
  // const isActive = name === "active" ? true : false;

  return (
    <div>
      <StH2TodoTitle>
        {isActive ? "뿌시는 중 🔨" : "다 뿌셔버림 🤍"}
      </StH2TodoTitle>
      {/* active 상태 ->  isDone: false 인 것만 보여줌 */}
      {/* done 상태 ->  isDone: true 인 것만 보여줌 */}
      <StDivTodoCards>
        {todos
          .filter((t) => t.isDone === !isActive)
          .map((t) => (
            <Todo item={t} setTodos={setTodos} isActive={isActive}></Todo>
          ))}
      </StDivTodoCards>
    </div>
  );
}

const StH2TodoTitle = styled.h2`
  color: #ffacc7;
  margin-top: 50px;
`;
const StDivTodoCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
