import Form from "../components/Form/Form";
import TodoList from "../components/TodoList/TodoList";
import styled from "styled-components";
const Main = () => {
  const StDiv = styled.div`
    max-width: 1200px;
    min-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  `;

  return (
    <StDiv>
      <Form></Form>
      <TodoList isActive={true}></TodoList>
      <TodoList isActive={false}></TodoList>
    </StDiv>
  );
};
export default Main;
