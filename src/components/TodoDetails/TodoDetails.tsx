import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../redux/config/configStore";
import { StDiv, StContents, StBtn, StP, StSpan } from "./style";

const TodoDetails = () => {
  const navigate = useNavigate();

  // 이전 컴포넌트에서 받아온 파라미터를 조회
  const params = useParams();

  const filteredTodos = useSelector((state: RootState) => {
    return state.todos.filter((item) => item.id === params.id);
  });

  const todo = filteredTodos[0];

  const handlePrevPage = () => {
    navigate("/");
  };
  return (
    <StDiv>
      <StContents>
        <h3 style={{ color: "#53424C" }}>상세페이지</h3>
        <StP>
          ID: <StSpan>{todo?.id}</StSpan>
        </StP>
        {/* <StSpan>{todo?.id}</StSpan> */}
        <StP>
          Title: <StSpan> {todo?.title}</StSpan>
        </StP>
        {/* <StSpan> {todo?.title}</StSpan> */}
        <StP>
          Content: <StSpan>{todo?.contents}</StSpan>
        </StP>
        {/* <StSpan>{todo?.contents}</StSpan> */}
        <StBtn onClick={handlePrevPage}>이전 페이지로 이동</StBtn>
      </StContents>
    </StDiv>
  );
};

export default TodoDetails;
