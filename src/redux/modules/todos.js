import { v4 as uuid } from "uuid";

//ACTION VALUE
const ADD_TODO = "ADD_TODO";
// const GET_TODO_ID = "GET_TODO_ID";
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

//INITIAL STATE
// 객체가 아닌 배열 상태이다.
const initialTodos = [
  {
    id: uuid(),
    isDone: false,
    contents: "후발대 강의 듣기",
    title: "리액트",
  },
  {
    id: uuid(),
    isDone: true,
    contents: "리액트 숙련 완강",
    title: "리액트",
  },
  {
    id: uuid(),
    isDone: true,
    contents: "미용실 가기",
    title: "개인 용무",
  },
];

//REDUCER
const todos = (state = initialTodos, action) => {
  switch (action.type) {
    case ADD_TODO: // 이전 배열들에 새로운 객체 추가
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case CHANGE_STATUS_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          // 구조분해할당으로 isDone의 값만 바꿔줄 수 있다.
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

//EXPORT DEFAULT REDUCER
export default todos;
