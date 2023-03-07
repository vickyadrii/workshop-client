import { Form, Input, Button, Layout, message, Typography } from "antd";
import styles from "./LoginPage.module.css";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../config/api";
import { useAuth } from "../../../context/authContext";

const { Text, Title } = Typography;
const { Content } = Layout;

export default function RegistrationPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    const payload = {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    };

    setIsRegister(true);
    api
      .post("/register", payload)
      .then((res) => {
        setAccessTokenCookie(res.token);
        messageApi.open({
          type: "success",
          content: "Login Successfully!",
        });
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        messageApi.error({
          type: "error",
          content: "Failed to register",
        });
      })
      .finally(() => setIsRegister(false));
  };

  const onFinishFailed = (error) => {
    console.log(error);
  };

  useEffect(() => {
    if (!auth.user.isNil()) {
      navigate("/");
    }
  }, []);

  return (
    <Layout
      style={{
        minHeight: "100vh",
        maxWidth: "480px",
        margin: "0 auto",
      }}
    >
      <Content style={{ backgroundColor: "#fdfcfc" }}>
        <Form
          className={styles.loginForm}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {contextHolder}
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Title
              level={2}
              style={{
                color: "#15B2C0",
              }}
            >
              Registration
            </Title>
            <Text
              style={{
                color: "#9d9e9e",
              }}
            >
              Your kindness journey starts here
            </Text>
          </div>

          <Form.Item
            name="fullname"
            rules={[{ required: true, message: "Please input your Fullname!" }]}
          >
            <Input
              prefix={<UserOutlined style={{ marginRight: "20px" }} />}
              size="large"
              placeholder="Fullname"
              bordered={false}
              style={{
                border: "none",
                borderRadius: "0px",
                borderBottom: "1px solid #15B2C0",
                boxShadow: "none",
                margin: "1rem 0",
              }}
              name="fullname"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Please input valid email",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined style={{ marginRight: "20px" }} />}
              size="large"
              placeholder="Email"
              bordered={false}
              style={{
                border: "none",
                borderRadius: "0px",
                borderBottom: "1px solid #15B2C0",
                boxShadow: "none",
                margin: "1rem 0",
              }}
              name="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ marginRight: "20px" }} />}
              bordered={false}
              size="large"
              style={{
                border: "none",
                borderRadius: "0px",
                borderBottom: "1px solid #15B2C0",
                boxShadow: "none",
                margin: "1rem 0",
              }}
              name="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="confirmationPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Confirm password is required." },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ marginRight: "20px" }} />}
              bordered={false}
              size="large"
              style={{
                border: "none",
                borderRadius: "0px",
                borderBottom: "1px solid #15B2C0",
                boxShadow: "none",
                margin: "1rem 0",
              }}
              placeholder="Confirmation Password..."
            />
          </Form.Item>

          <Form.Item
            style={{
              paddingTop: "1rem",
              width: "100%",
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              loading={isRegister}
              style={{
                backgroundColor: "#15B2C0",
                fontWeight: "600",
                width: "100%",
                height: "50px",
              }}
            >
              Register
            </Button>
          </Form.Item>
          <Link to="/login">Already have account?</Link>
        </Form>
      </Content>
    </Layout>
  );
}
