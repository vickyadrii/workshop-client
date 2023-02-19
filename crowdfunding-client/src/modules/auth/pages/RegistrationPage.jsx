import {message} from "antd"
import { Form, Input, Space, Button } from "antd";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../config/api"

const initialData = {
  fullname: "",
  email: "",
  password: "",
  confPass: ""
}

export default function RegistrationPage() {
  const navigate = useNavigate();
  const [formRegis, setFormRegis] = useState(initialData)
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = () => {
    console.log(formRegis);
    if(formRegis.password == formRegis.confPass){
      handleRegis()
    } else {
      warning("Your confirmation password must be the same!")
    }
  };

  const warning = (msg) => {
    messageApi.open({
      type: 'warning',
      content: msg,
    })
  }

  const onFinishFailed = (error) => {
    console.log(error);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormRegis(prevState => ({ ...prevState, [name]: value }));
  }

  const handleRegis = () => {
    api.post('/register', formRegis)
    .then(res => {
      console.log(res)
      navigate("/", { replace: true })
    })
    .catch(err => console.log(err))
  }

  return (
    <div>

    
    <Form
      className={styles.loginForm}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {contextHolder}
      <h1 style={{color: "#15B2C0", fontSize:"1.7rem", textAlign:"center"}}>Registration</h1>
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
            margin: "1rem 0",
          }}
          name={"fullname"}
          value={formRegis.fullname}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input
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
          name={"email"}
          value={formRegis.email}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          bordered={false}
          size="large"
          style={{
            border: "none",
            borderRadius: "0px",
            borderBottom: "1px solid #15B2C0",
            boxShadow: "none",
            margin: "1rem 0",
          }}
          name={"password"}
          placeholder="Password"
          value={formRegis.password}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        name="confirm-password"
        rules={[{ required: true, message: "Please input your Confirmation Password!" }]}
      >
        <Input.Password
          bordered={false}
          size="large"
          style={{
            border: "none",
            borderRadius: "0px",
            borderBottom: "1px solid #15B2C0",
            boxShadow: "none",
            margin: "1rem 0",
          }}
          name={"confPass"}
          placeholder="Confirmation Password"
          value={formRegis.confPass}
          onChange={handleChange}
        />
      </Form.Item>
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
      <Link to={"/login"} style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop:"1.5rem"
        }}>Already have account?</Link>
    </Form>
    </div>
  );
}
