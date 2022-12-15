import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
// import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import Layout from "./shared/Layout";
function App() {
  const initialTodos = [
    {
      id: uuid(),
      isDone: false,
      todo: "후발대 강의 듣기",
      title: "리액트",
    },
    {
      id: uuid(),
      isDone: true,
      todo: "리액트 숙련 완강",
      title: "리액트",
    },
    {
      id: uuid(),
      isDone: true,
      todo: "미용실 가기",
      title: "개인 용무",
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  return (
    <Layout>
      <div className="App">
        {/* 헤더 부분 */}
        {/* <Header>TO DO List</Header> */}
        {/* 투두리스트 입력 부분 */}
        <Form setTodos={setTodos}></Form>
        <div>
          <TodoList
            isActive={true}
            todos={todos}
            setTodos={setTodos}
          ></TodoList>
          <TodoList
            isActive={false}
            todos={todos}
            setTodos={setTodos}
          ></TodoList>
        </div>
      </div>
    </Layout>
  );
}

export default App;
