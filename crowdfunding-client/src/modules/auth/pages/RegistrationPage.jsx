import { Card } from "antd";
import { LockOutlined, UserOutlined, EyeTwoTone } from "@ant-design/icons";
import { Form, Input, Space, Button } from "antd";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import Link from "antd/es/typography/Link";

export default function RegistrationPage() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log(values);
    navigate("/", { replace: true });
  };

  const onFinishFailed = (error) => {
    console.log(error);
  };

  const toPageLogin = () => {
    navigate('/login')
  }

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
      <h1 style={{color: "#15B2C0", fontSize:"1.7rem"}}>Registration</h1>
      <Form.Item
        name="fullname"
        rules={[{ required: true, message: "Please input your Fullname!" }]}
      >
        <Input
          size="large"
          placeholder="Fullname"
          bordered={false}
          style={{
            border: "none",
            borderRadius: "0px",
            borderBottom: "1px solid #15B2C0",
            boxShadow: "none",
            // margin: "1rem 0",
          }}
        />
      </Form.Item>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          size="large"
          placeholder="Username"
          bordered={false}
          style={{
            border: "none",
            borderRadius: "0px",
            borderBottom: "1px solid #15B2C0",
            boxShadow: "none",
          
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
          // prefix={<LockOutlined style={{ marginRight: "20px" }} />}
          style={{
            border: "none",
            borderRadius: "0px",
            borderBottom: "1px solid #15B2C0",
            boxShadow: "none",
            
          }}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="confirm-password"
        rules={[{ required: true, message: "Please input your Confirmation Password!" }]}
      >
        <Input.Password
          bordered={false}
          size="large"
          // prefix={<LockOutlined style={{ marginRight: "20px" }} />}
          style={{
            border: "none",
            borderRadius: "0px",
            borderBottom: "1px solid #15B2C0",
            boxShadow: "none",
            
          }}
          placeholder="Confirmation Password"
        />
      </Form.Item>
      <Link onClick={toPageLogin} style={{marginBottom:"1rem"}}>Sudah Punya Akun?</Link>
      <Button
          type="primary"
          htmlType="submit"
          style={{
            width:"100%",
            backgroundColor: "#15B2C0",
            fontWeight: "600",
            marginTop: ""
          }}
        >
          Submit
        </Button>
      {/* <Form.Item
        style={{
          display: "flex",
          justifyContent: "center",
          width:"100%",
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          style={{
            width:"100%",
            backgroundColor: "#15B2C0",
            fontWeight: "600",
          }}
        >
          Submit
        </Button>
      </Form.Item> */}
    </Form>
  );
}
