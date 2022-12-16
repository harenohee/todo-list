import React from "react";
import Button from "../Button/Button";
// import "./style.css";
import styled from "styled-components";
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
    <StLiTodoCard id={id} key={id}>
      {/* 상세페이지로 이동하는 부분 */}
      <span>상세보기</span>
      <StTodoCardTitle>{title}</StTodoCardTitle>
      <StTodoCardContent>{todo}</StTodoCardContent>
      <StDivTodoCardBtn>
        <Button handleClick={deleteTodo} value="삭제"></Button>
        {isDone ? (
          <Button handleClick={cancelTodo} value="취소" />
        ) : (
          <Button handleClick={doneTodo} value="완료" />
        )}
      </StDivTodoCardBtn>
    </StLiTodoCard>
  );
}

const StLiTodoCard = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  width: 200px;
  height: 200px;
  /* 백그라운드 컬러와 동일하게 */
  /* 보더 픽셀을 없앴더니 호버될 때마다 깨져서 꼭 픽셀을 주어야겠다.. */
  border: 3px solid #fff6f0;
  background-color: #fff6f0;
  border-radius: 15px;
  &:hover {
    border: 3px solid #ffacc7;
  }
`;
const StTodoCardContent = styled.p`
  font-size: 18px;
  word-wrap: break-word;
`;
const StTodoCardTitle = styled.p`
  font-size: 15px;
  font-weight: bold;
  word-wrap: break-word;
`;

const StDivTodoCardBtn = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
// .todo-card {
//   list-style: none;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: 0 10px;
//   width: 200px;
//   height: 200px;
//   /* 백그라운드 컬러와 동일하게 */
//   /* 보더 픽셀을 없앴더니 호버될 때마다 깨져서 꼭 픽셀을 주어야겠다.. */
//   border: 3px solid #f6f6c9;
//   background-color: #f6f6c9;
//   border-radius: 15px;
// }
// .todo-card:hover {
//   border: 3px solid #ffacc7;
// }
// .todo-card-content {
//   font-size: 18px;
//   word-wrap: break-word;
// }
// .todo-card-title {
//   font-size: 15px;
//   font-weight: bold;
//   word-wrap: break-word;
// }
// .todo-card-btn {
//   position: relative;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// }
