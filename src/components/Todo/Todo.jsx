import React from "react";
import Button from "../Button/Button";
// import "./style.css";
import styled from "styled-components";
export default function Todo({ item, setTodos, isActive }) {
  //todo 제거 함수
  const deleteTodo = () => {
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };

  // cancelTodo와 doneTodo에 setTodos((prev) =>{} 왜 중괄호를 쓰면 에러가 날까!
  //setTodo안에는 하나의 리턴만 받는다.
  //   todo 취소 함수
  // const cancelTodo = () => {
  //   setTodos((prev) => {
  //     return prev.map((t) => {
  //       if (t.id === item.id) {
  //         return { ...t, isDone: false };
  //       }
  //       return t;
  //     });
  //   });
  // };
  // todo 완료 함수
  // const doneTodo = () => {
  //   setTodos((prev) => {
  //     return prev.map((t) => {
  //       if (t.id === item.id) {
  //         return { ...t, isDone: true };
  //       }
  //       return t;
  //     });
  //   });
  // };
  // isDone의 상태를 바꿔줘야 합니당
  const handleIsActiveChange = () => {
    setTodos((prev) => {
      return prev.map((t) => {
        // 클릭한 그 todo가 맞는지 체크
        if (t.id === item.id) {
          // 구조분해할당으로 isDone의 값만 바꿔줄 수 있습니당.
          return { ...t, isDone: !t.isDone };
        } else return t;
      });
    });
  };
  return (
    <StLiTodoCard id={item.id} key={item.id}>
      {/* 상세페이지로 이동하는 부분 */}
      <span>상세보기</span>
      <StTodoCardTitle>{item.title}</StTodoCardTitle>
      <StTodoCardContent>{item.todo}</StTodoCardContent>
      <StDivTodoCardBtn>
        <Button handleClick={deleteTodo} value="삭제"></Button>
        {isActive ? (
          <Button handleClick={handleIsActiveChange} value="취소" />
        ) : (
          <Button handleClick={handleIsActiveChange} value="완료" />
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
