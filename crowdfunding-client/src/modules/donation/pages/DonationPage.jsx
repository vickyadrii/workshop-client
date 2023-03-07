import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, message, Typography } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../config/api";

import toRupiah from "@develoka/angka-rupiah-js";
import donationService from "../../../services/donationService";
import requireAuth from "../../../components/RequireAuth";
import campaignService from "../../../services/campaignService";

const { Text, Title } = Typography;

const DonationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [campaign, setCampaign] = useState({});
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    if (values.total > campaign.target) {
      form.setFields([
        {
          name: "total",
          errors: ["Total donation grater than target donation"],
        },
      ]);
      return;
    }

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

  const fetchCampaign = useCallback(() => {
    campaignService
      .getCampaign(id)
      .then(setCampaign)
      .catch((err) => console.log(err));
  }, [id]);

  const handleOnBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchCampaign();
    console.log(campaign);
  }, []);

  return (
    <div className="py-4">
      {contextHolder}
      <div className="items-center gap-4 my-4">
        <Button onClick={handleOnBack}>
          <ArrowLeftOutlined size={16} />
        </Button>
        <Text className="fn-4 bold">
          Donate <span style={{ color: "#21B4C3" }}>♥</span>
        </Text>
      </div>
      <Form onFinish={onFinish} layout="vertical" form={form}>
        <Form.Item
          name="total"
          label="Donasi"
          rules={[
            { required: true, message: "Please input nominal donation" },
            {
              max: campaign.target,
              message: "Total donation can't be grater than target",
            },
          ]}
        >
          <Input
            type="number"
            min={0}
            // max={campaign.target}
            placeholder="Please input your nominal"
            size="large"
            onChange={(e) => setTotal(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="submit"
            className="w-full"
            style={{
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

export default requireAuth(DonationPage);
