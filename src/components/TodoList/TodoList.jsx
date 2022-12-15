import React from "react";
import Todo from "../Todo/Todo";
import "./style.css";
export default function TodoList({ isActive, todos, setTodos }) {
  // const isActive = name === "active" ? true : false;

  return (
    <div className="todo-list">
      <h2 className="todo-title">
        {isActive ? "뿌시는 중 🔨" : "다 뿌셔버림 🤍"}
      </h2>
      {/* active 상태 ->  isDone: false 인 것만 보여줌 */}
      {/* done 상태 ->  isDone: true 인 것만 보여줌 */}
      <div className="todo-cards">
        {todos
          .filter((t) => isActive === !t.isDone)
          .map((t) => (
            <Todo
              todo={t.todo}
              isDone={t.isDone}
              title={t.title}
              setTodos={setTodos}
              key={t.id}
              id={t.id}
            ></Todo>
          ))}
      </div>
    </div>
  );
}
