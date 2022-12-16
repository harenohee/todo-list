import { v4 as uuid } from "uuid";

//ACTION VALUE
const ADD_TODO = "ADD_TODO";
const GET_TODO_ID = "GET_TODO_ID";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_STATUS_TODO = "CHANGE_STATE_TODO";

//ACTION CREATOR
// 여기에 추가되는 투두가 들어오게
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// todo 삭제 action creator
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
// todo isDone 변경하는 부분
export const changeStatusTodo = (payload) => {
  return {
    type: CHANGE_STATUS_TODO,
    payload,
  };
};

// 상세페이지에서 해당 todo만 보이게 하는 부분
export const getTodoId = (payload) => {
  return {
    type: GET_TODO_ID,
    payload,
  };
};

//INITIAL STATE
// 객체가 아닌 배열 상태이다.
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

//REDUCER

const todos = (state = initialTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        //여기서 스테이트 변경이 일어날까요..
        ...state,
        todos: [...state.todo, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case CHANGE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {}),
      };
    default:
      return state;
  }
};

//EXPORT DEFAULT REDUCER
export default todos;
