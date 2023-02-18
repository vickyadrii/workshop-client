import { Button, Layout, Menu, Slider } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { HeartTwoTone, HomeTwoTone, RocketTwoTone } from "@ant-design/icons";
const { Content, Header, Footer } = Layout;

export default function MobileLayout() {
  const stylePageNavbar = {
    display: "flex",
    alignItems: "center",
    gap: "2px",
    flexDirection: "column",
    height: "50px",
    fontWeight: 600,
    color: "#15B2C0",
    fontSize: "12px",
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        maxWidth: "640px",
        margin: "0 auto",
      }}
    >
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Link to="/">
            <div style={stylePageNavbar}>
              <HomeTwoTone
                style={{
                  fontSize: 32,
                }}
              />
              Home
            </div>
          </Link>
          <Link to="/campaign">
            <div style={stylePageNavbar}>
              <HeartTwoTone
                style={{
                  fontSize: 32,
                }}
              />
              Campaign
            </div>
          </Link>
          <Link to="/">
            <div style={stylePageNavbar}>
              <RocketTwoTone
                style={{
                  fontSize: 32,
                }}
              />
              Add Campaign
            </div>
          </Link>
        </div>
      </Footer>
    </Layout>
  );
}
