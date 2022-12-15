import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "../components/Todo/Todo";
import App from "../App";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes안에 이렇게 작성합니다. 
        Route에는 react-router-dom에서 지원하는 props들이 있습니다.
        path는 우리가 흔히 말하는 사용하고싶은 "주소"를 넣어주면 됩니다.
		element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어줍니다. */}
        {/* 나중에 리듀서까지 하고 메인으로 보여주자 */}
        <Route path="/" element={<App />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
