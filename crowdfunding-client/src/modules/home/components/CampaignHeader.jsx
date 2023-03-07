import { Avatar, Modal, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

const { Text, Title } = Typography;

const CampaignHeader = () => {
  const auth = useAuth();

  const handleLogout = () => {
    Modal.confirm({
      title: "Info",
      content: "Are you sure to logout?",
      okText: "Ok",
      cancelText: "Cancel",
      onOk: () => auth.logout(),
    });
  };

  return (
    <div className="flex-between my-4">
      <Text>Let's help each others!</Text>
      {!auth.user.isNil() ? (
        <Link onClick={handleLogout} className="items-center gap-2">
          <Avatar
            style={{ backgroundColor: "#15B2C0" }}
            icon={<UserOutlined />}
          />

          <Text
            style={{
              fontSize: "16px",
              color: "#15B2C0",
            }}
          >
            Welcome Back!
          </Text>
        </Link>
      ) : (
        <Link
          to="/login"
          style={{
            backgroundColor: "#15B2C0",
            color: "#ffffff",
            fontWeight: "600",
            padding: "0.5rem 1.5rem",
            borderRadius: "6px",
          }}
        >
          Sign in
        </Link>
      )}
    </div>
  );
};

export default CampaignHeader;
