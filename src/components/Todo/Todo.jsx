import React from "react";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { deleteTodo, changeStatusTodo } from "../../redux/modules/todos";
import {
  StDivTodoCardBtn,
  StLiTodoCard,
  StTodoCardContent,
  StTodoCardTitle,
} from "./style";
import { useNavigate } from "react-router-dom";
export default function Todo({ item, isActive }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //todo 제거 함수
  const ondeleteTodo = () => {
    if (window.confirm("삭제하시겠습니까?")) dispatch(deleteTodo(item.id));
  };
  // 완료, 취소
  const handleIsActiveChange = () => {
    dispatch(changeStatusTodo(item.id));
  };
  // 상세보기 클릭 이벤트
  const handleDetailClick = () => {
    navigate(`/${item.id}`);
  };
  return (
    <StLiTodoCard id={item.id} key={item.id}>
      {/* 상세페이지로 이동하는 부분 */}
      <p
        style={{ cursor: "pointer", color: "#53424c", fontWeight: "bold" }}
        onClick={handleDetailClick}
      >
        [상세보기]
      </p>
      <StTodoCardTitle>{item.title}</StTodoCardTitle>
      <StTodoCardContent>{item.contents}</StTodoCardContent>
      <StDivTodoCardBtn>
        {isActive ? (
          <Button handleClick={handleIsActiveChange} value="취소" />
        ) : (
          <Button handleClick={handleIsActiveChange} value="완료" />
        )}
        <Button handleClick={ondeleteTodo} value="삭제"></Button>
      </StDivTodoCardBtn>
    </StLiTodoCard>
  );
}
