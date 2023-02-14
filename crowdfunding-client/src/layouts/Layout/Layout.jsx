import { Layout, Menu, Slider } from "antd";

const { Content, Header } = Layout;
import { UserOutlined } from "@ant-design/icons";

export default function MobileLayout() {
  return (
    <Layout>
      <Slider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <UserOutlined />
            <span className="nav-text">Nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <UserOutlined />
            <span className="nav-text">Nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <UserOutlined />
            <span className="nav-text">Nav 3</span>
          </Menu.Item>
        </Menu>
      </Slider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              style={{ padding: 24, background: "#fff", textAlign: "center" }}
            >
              test
            </div>
          </Content>
        </Header>
      </Layout>
    </Layout>
  );
}
