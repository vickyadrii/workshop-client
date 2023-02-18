import { useState } from "react";
import { LockOutlined, UserOutlined, EyeTwoTone } from "@ant-design/icons";
import { Form, Input, Space, Button } from "antd";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log(values);
    navigate("/home", { replace: true });
  };

  const onFinishFailed = (error) => {
    console.log(error);
  };

  return (
    <Form
      className={styles.loginForm}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      // initialValues={{
      //   remember: true,
      // }}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          size="large"
          prefix={<UserOutlined style={{ marginRight: "20px" }} />}
          placeholder="Username"
          bordered={false}
          style={{
            border: "none",
            borderRadius: "0px",
            borderBottom: "1px solid #15B2C0",
            boxShadow: "none",
            margin: "1rem 0",
          }}
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
          style={{
            border: "none",
            borderRadius: "0px",
            borderBottom: "1px solid #15B2C0",
            boxShadow: "none",
            margin: "1rem 0",
          }}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          style={{
            backgroundColor: "#15B2C0",
            fontWeight: "600",
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
