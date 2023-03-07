import { Button, Layout, Menu, Slider, Typography } from "antd";
import { Link, Outlet } from "react-router-dom";
import { HeartTwoTone, HomeTwoTone, RocketTwoTone } from "@ant-design/icons";
import { useAuth } from "../../context/authContext";
const { Content, Header, Footer } = Layout;

const { Text } = Typography;

const MobileLayout = () => {
  const auth = useAuth();

  const stylePageNavbar = {
    // display: "flex",
    // alignItems: "center",
    // gap: "2px",
    // flexDirection: "column",
    // height: "50px",
    // fontWeight: 600,
    // color: "#15B2C0",
    // fontSize: "12px",
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
        <div className="flex-around">
          <Link to="/" className="items-center flex-column primary-color">
            <HomeTwoTone style={{ fontSize: 20 }} />
            <Text className="primary-color">Home</Text>
          </Link>
          <Link
            to="/campaign"
            className="items-center flex-column primary-color"
          >
            <HeartTwoTone style={{ fontSize: 20 }} />
            <Text className="primary-color">Campaign</Text>
          </Link>
          {!auth.user.isNil() ? (
            <Link
              to="/campaign/add"
              className="items-center flex-column primary-color"
            >
              <RocketTwoTone style={{ fontSize: 20 }} />
              <Text className="primary-color">Add</Text>
            </Link>
          ) : null}
        </div>
      </Footer>
    </Layout>
  );
};

export default MobileLayout;
