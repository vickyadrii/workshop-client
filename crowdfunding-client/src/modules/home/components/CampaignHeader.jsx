import { Avatar, Button, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { api } from "../../../config/api";
import {
  getAccessTokenCookie,
  clearAccessTokenCookie,
} from "../../../utils/cookie";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const CampaignHeader = () => {
  const token = getAccessTokenCookie();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleLogout = () => {
    clearAccessTokenCookie();
    navigate("/login", { replace: true });
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "1rem 0",
      }}
    >
      <h3
        style={{
          fontSize: "14px",
          color: "#c4c4c4",
        }}
      >
        Let's help each others!
      </h3>
      {!token ? (
        <Link
          to={"/login"}
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
      ) : (
        <Link
          onClick={handleShowModal}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Avatar
            style={{ backgroundColor: "#15B2C0" }}
            icon={<UserOutlined />}
          />
          <h2
            style={{
              fontSize: "16px",
              color: "#15B2C0",
            }}
          >
            Welcome Back!
          </h2>
        </Link>
      )}
      <Modal
        title="Are you sure, you want to logout?"
        centered={true}
        open={showModal}
        okText={"Yes"}
        onOk={handleLogout}
        onCancel={handleShowModal}
      >
        If you logout, you can open this page
      </Modal>
    </section>
  );
};

export default CampaignHeader;
