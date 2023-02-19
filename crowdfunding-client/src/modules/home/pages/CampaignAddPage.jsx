import React, { useState } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { api } from "../../../config/api";
import { useNavigate } from "react-router-dom";

const initialData = {
  title: "",
  content: "",
  target: "",
  targetDate: "",
};

const token = "example"

const CampaignAddPage = () => {
  const navigate = useNavigate()
  const [formCampaign, setFormCampaign] = useState(initialData);
  const onFinish = () => {
    addCampaign(formCampaign)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormCampaign(prevState => ({ ...prevState, [name]: value }));
  }

  const handleDateChange = (date, dateString) => {
    setFormCampaign((prevState) => ({ ...prevState, targetDate: dateString }));
  };

  const addCampaign = (data) => {
    api.post("/campaigns", data , {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    })
    .then(res => {
      console.log(res)
      navigate('/')
    })
    .catch(err => console.log(err))
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Form
        style={{
          width: "100%",
        }}
        onFinish={onFinish}
      >
        <h1 style={{ color: "#15B2C0", fontSize: "1.7rem" }}>Add Campaign</h1>
        <Form.Item
          name={"title"}
          rules={[{ required: true, message: "Please input your Title!" }]}
          style={{ marginBottom: "2rem" }}
        >
          <Input type="text" placeholder="Title" name="title" value={formCampaign.title} onChange={handleChange}/>
        </Form.Item>
        <Form.Item
          name={"content"}
          rules={[{ required: true, message: "Please input your Content!" }]}
          style={{ marginBottom: "2rem" }}
        >
          <Input type="text" placeholder="Content" name="content" value={formCampaign.content} onChange={handleChange}/>
        </Form.Item>
        <Form.Item
          name={"target"}
          rules={[{ required: true, message: "Please input your Target!" }]}
          style={{ marginBottom: "2rem" }}
        >
          <Input type="number" placeholder="Target" name="target" value={formCampaign.target} onChange={handleChange}/>
        </Form.Item>
        <Form.Item
          name={"targetDate"}
          rules={[
            { required: true, message: "Please input your Target Date!" },
          ]}
          style={{ marginBottom: "2rem" }}
          
        >
          <DatePicker format={"DD/MM/YYYY"} style={{ width: "100%" }} value={formCampaign.targetDate} onChange={handleDateChange}/>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "#15B2C0",
              fontWeight: "600",
              width: "100%",
            }}
          >
            <PlusOutlined />
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CampaignAddPage;
