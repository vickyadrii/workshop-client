import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const CampaignHeader = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
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
      <div
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
      </div>
    </section>
  );
};

export default CampaignHeader;
