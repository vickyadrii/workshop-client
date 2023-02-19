import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, message } from "antd";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../config/api";

import toRupiah from "@develoka/angka-rupiah-js";

const DonationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();
  const initialData = {
    total: total,
    campaignId: id,
  };

  const onSuccess = () => {
    messageApi.open({
      type: "success",
      content: "Thanks for your donation!",
    });
  };

  const onError = () => {
    messageApi.error({
      type: "error",
      content: "Failed to donate!",
    });
  };

  const styleDonateButton = {
    width: "100%",
    height: "60px",
    textAlign: "left",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#15B2C0",
    fontWeight: "600",
    fontSize: "20px",
  };

  const onFinish = (values) => {
    console.log(values.total);
    setTotal(values.total);
    api
      .post("/donations", initialData)
      .then((res) => {
        console.log(res);
        onSuccess();
        setTimeout(() => {
          navigate("/campaign", { replace: true });
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        onError();
      });
  };

  const handleOnBack = () => {
    navigate(-1);
  };

  return (
    <section
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "0 2rem",
      }}
    >
      {contextHolder}
      <header
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          margin: "1rem 0",
        }}
      >
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
        <h3>
          Donate <span style={{ color: "#21B4C3" }}>♥</span>
        </h3>
      </header>
      <Form onFinish={onFinish} layout={"vertical"}>
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
          >
            Donate {total === 0 ? null : toRupiah(total)}
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default DonationPage;
