import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Space } from "antd";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <Form className={styles.loginForm}>
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
            borderBottom: "1px solid red",
            boxShadow: "none",
          }}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input
          bordered={false}
          size="large"
          prefix={<LockOutlined style={{ marginRight: "20px" }} />}
          placeholder="Password"
        />
      </Form.Item>
    </Form>
  );
}
