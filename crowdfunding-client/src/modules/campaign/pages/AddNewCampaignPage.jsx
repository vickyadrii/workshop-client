import React, { useState } from "react";
import { Form, Input, Button, DatePicker, message, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import campaignService from "../../../services/campaignService";
import NotificationError from "../../../components/Notifications/NotificationError";
import requireAuth from "../../../components/RequireAuth";

const { Title } = Typography;

const AddNewCampaignPage = () => {
  const navigate = useNavigate();
  const [isCreating, setIsCreating] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    const payload = {
      title: values.title,
      content: values.content,
      target: Number(values.target),
      targetDate: dayjs(values.targetDate).format("DD/MM/YYYY"),
    };
    console.log(payload);

    setIsCreating(true);
    campaignService
      .addCampaign(payload)
      .then(() => {
        messageApi.open({
          type: "success",
          content: "Campaign successfully created.",
        });
        setTimeout(() => {
          navigate("/campaign", { replace: true });
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        NotificationError("failed to add campaign");
      })
      .finally(() => setIsCreating(false));
  };

  return (
    <div style={{ padding: "0 1rem" }}>
      {contextHolder}
      <Form className="w-full" onFinish={onFinish} layout="vertical">
        <Title level={2} style={{ color: "#15B2C0", textAlign: "center" }}>
          Start a new campaign
        </Title>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input your Title!" }]}
        >
          <Input type="text" placeholder="Title" name="title" />
        </Form.Item>
        <Form.Item
          label="Total Target"
          name="target"
          rules={[{ required: true, message: "Please input your Target!" }]}
        >
          <Input type="number" placeholder="Target" name="target" />
        </Form.Item>
        <Form.Item
          label="Target Date"
          name="targetDate"
          rules={[
            { required: true, message: "Please input your Target Date!" },
          ]}
          className="mb-8"
        >
          <DatePicker format="DD/MM/YYYY" className="w-full" />
        </Form.Item>
        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: "Please input your Content!" }]}
        >
          <Input.TextArea
            type="text"
            placeholder="Content"
            name="content"
            rows={5}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "#15B2C0",
              fontWeight: "600",
              width: "100%",
              height: "50px",
            }}
            loading={isCreating}
          >
            <PlusOutlined />
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default requireAuth(AddNewCampaignPage);
