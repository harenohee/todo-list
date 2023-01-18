import styled from "styled-components";

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
  border: 4px solid #fff3fa;
  background-color: #fff3fa;
  border-radius: 15px;
  &:hover {
    border: 4px solid #ffe5fe;
  }
`;
const StTodoCardContent = styled.p`
  font-size: 18px;
  word-wrap: break-word;
`;
const StTodoCardTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  word-wrap: break-word;
`;

const StDivTodoCardBtn = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export { StDivTodoCardBtn, StLiTodoCard, StTodoCardContent, StTodoCardTitle };
