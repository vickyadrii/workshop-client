import { useEffect, useState } from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Form, Input, message, Button, Layout, Typography } from "antd";
import styles from "./LoginPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../config/api";
import { setAccessTokenCookie } from "../../../utils/cookie";
import { useAuth } from "../../../context/authContext";

const { Content } = Layout;
const { Text, Title } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const [isLogin, setIsLogin] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    setIsLogin(true);
    auth
      .login(values.email, values.password)
      .then(() => {
        messageApi.open({
          type: "success",
          content: "Login Successfully!",
        });
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1500);
      })
      .catch((err) => {
        messageApi.error({
          type: "error",
          content: "Failed to Login",
        });
        console.log(err);
      });
  };

  const onFinishFailed = (error) => {
    console.log(error);
  };

  useEffect(() => {
    console.log(auth.user.isNil());
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
      <Content
        style={{
          backgroundColor: "#fdfcfc",
        }}
      >
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className={styles.loginForm}
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
              Login
            </Title>
            <Text
              style={{
                color: "#9d9e9e",
              }}
            >
              Hello, Welcome Back!
            </Text>
          </div>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
              {
                type: "email",
                message: "Please input valid Email!",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<MailOutlined style={{ marginRight: "20px" }} />}
              placeholder="Email"
              bordered={false}
              className={styles.inputForm}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              bordered={false}
              size="large"
              prefix={<LockOutlined style={{ marginRight: "20px" }} />}
              className={styles.inputForm}
              placeholder="Password"
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
              style={{
                backgroundColor: "#15B2C0",
                fontWeight: "600",
                width: "100%",
                height: "50px",
              }}
              loading={isLogin}
            >
              Login
            </Button>
          </Form.Item>
          <Link to={"/registration"}>Not a member? Sign up now!</Link>
        </Form>
      </Content>
    </Layout>
  );
};

export default LoginPage;
