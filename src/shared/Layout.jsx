// import { Children } from "react";

const HeaderStyle = {
  width: "100%",
  background: "#EC5E97",
  height: "45px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "20px",
  color: "white",
  fontWeight: "600",
};

const FooterStyle = {
  width: "100%",
  height: "30px",
  display: "flex",
  background: "#EC5E97",
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
      <span>harenohee</span>
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
