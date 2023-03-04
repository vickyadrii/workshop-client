import { Button, Layout, Menu, Slider } from "antd";
import { Link, Outlet } from "react-router-dom";
import { HeartTwoTone, HomeTwoTone, RocketTwoTone } from "@ant-design/icons";
import requireAuth from "../../components/RequireAuth";
import { useAuth } from "../../context/authContext";
const { Content, Header, Footer } = Layout;

const MobileLayout = () => {
  const auth = useAuth();

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
        maxWidth: "480px",
        margin: "0 auto",
      }}
    >
      <Content style={{ backgroundColor: "#fdfcfc" }}>
        <Outlet />
      </Content>
      <Footer
        style={{
          backgroundColor: "#fff",
          borderTop: "1px solid rgb(33, 180, 195)",
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
          {auth.user ? (
            <Link to="/campaign/add">
              <div style={stylePageNavbar}>
                <RocketTwoTone
                  style={{
                    fontSize: 32,
                  }}
                />
                Add
              </div>
            </Link>
          ) : null}
        </div>
      </Footer>
    </Layout>
  );
};

export default requireAuth(MobileLayout);
