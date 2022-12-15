import { Children } from "react";

const HeaderStyle = {
  width: "100%",
  background: "black",
  height: "50px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "20px",
  color: "white",
  fontWeight: "600",
};

const FooterStyle = {
  width: "100%",
  height: "50px",
  display: "flex",
  background: "black",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
};
const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "90vh",
};

function Header() {
  return (
    <div style={{ ...HeaderStyle }}>
      <span>TodoList</span>
    </div>
  );
}

const Footer = () => {
  return (
    <div style={{ ...FooterStyle }}>
      <span>내꺼야</span>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <div style={{ ...layoutStyle }}>{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
