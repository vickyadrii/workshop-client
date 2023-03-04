import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, message, Typography } from "antd";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../config/api";

import toRupiah from "@develoka/angka-rupiah-js";
import donationService from "../../../services/donationService";

const { Text, Title } = Typography;

const DonationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    const payload = {
      campaignId: id,
      total: values.total,
    };

    setIsLoading(true);
    donationService
      .addDonation(payload)
      .then(() => {
        messageApi.open({
          type: "success",
          content: "Thanks for your donation!",
        });

        setTimeout(() => {
          navigate("/campaign", { replace: true });
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        messageApi.error({
          type: "error",
          content: "Failed to add donation!",
        });
      })
      .finally(() => setIsLoading(false));
  };

  const handleOnBack = () => {
    navigate(-1);
  };

  return (
    <div
      style={{
        padding: "0 2rem",
      }}
    >
      {contextHolder}
      <div className="items-center gap-4 my-4">
        <Button
          onClick={handleOnBack}
          style={{
            padding: "5px 12px",
          }}
        >
          <ArrowLeftOutlined
            style={{
              fontSize: 16,
            }}
          />
        </Button>
        <Title level={3}>
          Donate <span style={{ color: "#21B4C3" }}>♥</span>
        </Title>
      </div>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          name="total"
          label="Donasi"
          required
          rules={[{ required: true, message: "Please input nominal donation" }]}
        >
          <Input
            type="number"
            min={0}
            placeholder="Please input your nominal"
            size="large"
            onChange={(e) => setTotal(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="submit"
            style={{
              width: "100%",
              height: "50px",
              backgroundColor: "#15B2C0",
              color: "#ffffff",
              fontWeight: 600,
            }}
            size="large"
            loading={isLoading}
          >
            Donate {total === 0 ? null : toRupiah(total)}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DonationPage;
