import { useState } from "react";
import { LockOutlined, UserOutlined, EyeTwoTone } from "@ant-design/icons";
import { Form, Input, message, Button } from "antd";
import styles from "./LoginPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../config/api";
import { setAccessTokenCookie } from "../../../utils/cookie";

const LoginPage = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const onSuccess = () => {
    messageApi.open({
      type: "success",
      content: "Login Successfully!",
    });
  };

  const onError = () => {
    messageApi.error({
      type: "error",
      content: "Incorrect email or password!",
    });
  };

  const onFinish = (values) => {
    api
      .post("/login", values)
      .then((res) => {
        setAccessTokenCookie(res.token);
        onSuccess();
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1500);
      })
      .catch((err) => {
        onError();
        console.log(err);
      });
    // console.log(values);
  };

  const onFinishFailed = (error) => {
    console.log(error);
    // onError();
  };

  return (
    <section className={styles.loginForm}>
      {contextHolder}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            margin: 0,
            color: "#15B2C0",
          }}
        >
          Login
        </h2>
        <p
          style={{
            color: "#9d9e9e",
          }}
        >
          Hello, Welcome Back!
        </p>
      </div>

      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
            {
              type: "email",
              message: "The input is not valid Email!",
            },
          ]}
        >
          <Input
            size="large"
            prefix={<UserOutlined style={{ marginRight: "20px" }} />}
            placeholder="Email"
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
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Link
        to={"/registration"}
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        Not a member? Sign up now!
      </Link>
    </section>
  );
};

export default LoginPage;
