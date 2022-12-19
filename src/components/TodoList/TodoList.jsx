import React from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";
import { StDivTodoCards, StH2TodoTitle } from "./style";

export default function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);
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
            <Todo item={t} key={t.id} isActive={isActive}></Todo>
          ))}
      </StDivTodoCards>
    </div>
  );
}
