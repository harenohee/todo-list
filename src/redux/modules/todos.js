// import { v4 as uuid } from "uuid";

// //ACTION VALUE
// const ADD_TODO = "ADD_TODO";

// //ACTION CREATOR
// // 여기에 추가되는 투두가 들어오게
// export const addTodo = (payload) => {
//   return {
//     type: ADD_TODO,
//     payload,
//   };
// };

// //INITIAL STATE
// const initialTodos = [
//   {
//     id: uuid(),
//     isDone: false,
//     todo: "후발대 강의 듣기",
//     title: "리액트",
//   },
//   {
//     id: uuid(),
//     isDone: true,
//     todo: "리액트 숙련 완강",
//     title: "리액트",
//   },
//   {
//     id: uuid(),
//     isDone: true,
//     todo: "미용실 가기",
//     title: "개인 용무",
//   },
// ];

// //REDUCER

// const todos = (state = initialTodos, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         //여기서 스테이트 변경이 일어날까요..
//         // setTodo((prev)=>...prev, action.payload);
//       };
//     default:
//       return state;
//   }
// };

// //EXPORT DEFAULT REDUCER
// export default todos;
