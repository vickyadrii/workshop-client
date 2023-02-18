import { Card } from "antd";
import { LockOutlined, UserOutlined, EyeTwoTone } from "@ant-design/icons";
import { Form, Input, Space, Button } from "antd";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import Link from "antd/es/typography/Link";
import { useState } from "react";

export default function RegistrationPage() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confPass, setConfPass] = useState("")
  

  const onFinish = (values) => {
    // console.log(values);
    if(password == confPass){
      navigate("/", { replace: true });
    } else {
      alert('Masukkan konfirmasi password dengan benar!')
    }
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
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          value={confPass}
          onChange={(e)=> setConfPass(e.target.value)}
        />
      </Form.Item>
      <Link onClick={toPageLogin}>Sudah Punya Akun?</Link>
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
