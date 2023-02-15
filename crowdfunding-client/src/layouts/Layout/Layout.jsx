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
      <Header></Header>
      <Content style={{ backgroundColor: "white" }}>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}
