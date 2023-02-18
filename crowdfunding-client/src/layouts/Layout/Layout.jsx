import { Layout, Menu, Slider } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Content, Header, Footer } = Layout;

export default function MobileLayout() {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        maxWidth: "640px",
        margin: "0 auto",
      }}
    >
      {/* <Header
        style={{
          backgroundColor: "#15B2C0",
          color: "#fff",
        }}
      >
        <h3>This is a header</h3>
      </Header> */}
      <Content style={{ backgroundColor: "#fdfcfc" }}>
        <Outlet />
      </Content>
      <Footer
        style={{
          backgroundColor: "#fff",
          borderTop: "1px solid #cecece",
          position: "sticky",
          bottom: "0",
          zIndex: "10",
        }}
      >
        Footer
      </Footer>
    </Layout>
  );
}
