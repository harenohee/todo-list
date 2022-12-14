import React from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";
import { StDivTodoCards, StH2TodoTitle } from "./style";

export default function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <StH2TodoTitle>
        {isActive ? "λΏμλ μ€ π¨" : "λ€ λΏμλ²λ¦Ό π€"}
      </StH2TodoTitle>
      {/* active μν ->  isDone: false μΈ κ²λ§ λ³΄μ¬μ€ */}
      {/* done μν ->  isDone: true μΈ κ²λ§ λ³΄μ¬μ€ */}
      <StDivTodoCards>
        {todos
          .filter((t) => t.isDone === !isActive)
          .map((t) => (
            <Todo item={t} key={t.id} isActive={isActive}></Todo>
          ))}
      </StDivTodoCards>
    </div>
  );
}
