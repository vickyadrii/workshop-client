import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import imageCard from "../../../assets/images/imageCard.png";
import { Button, Card, Progress, Typography } from "antd";
import campaignService from "../../../services/campaignService";
import toRupiah from "@develoka/angka-rupiah-js";

const { Text } = Typography;

const CampaignDetailPage = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState({});

  const handleonBack = () => {
    navigate(-1);
  };

  const fetchCampaign = useCallback(() => {
    campaignService
      .getCampaign(id)
      .then(setCampaign)
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    fetchCampaign();
  }, []);

  return (
    <div className="py-4">
      <div className="items-center gap-4 my-4">
        <Button onClick={handleonBack}>
          <ArrowLeftOutlined size={16} />
        </Button>
        <Text className="fn-4 bold">Detail</Text>
      </div>
      <Card
        className="my-4"
        cover={
          <img
            src={imageCard}
            alt="image card"
            style={{
              width: "100%",
            }}
          />
        }
      >
        <div>
          <Card.Meta title={campaign.title} description={campaign.content} />
          <div
            className="mt-4"
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <div
              className="flex flex-column"
              style={{
                gap: "6px",
              }}
            >
              <Text
                className="primary-color"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  margin: 0,
                }}
              >
                {toRupiah(Number(campaign.current_donation))}
              </Text>
              <Text>
                Collected from <b>{toRupiah(Number(campaign.target))}</b>
              </Text>
            </div>
            <Text>{campaign.targetDate}</Text>
          </div>
        </div>
        <div className="my-2">
          <Progress
            percent={(campaign.current_donation / campaign.target) * 100}
            showInfo={false}
          />
        </div>
      </Card>
      <Button
        onClick={() => {
          navigate(`/donation/${id}`);
        }}
        type="primary"
        className="w-full my-4"
        style={{
          backgroundColor: "#15B2C0",
          fontWeight: "600",
          height: "50px",
        }}
      >
        Donate now
      </Button>
    </div>
  );
};

export default CampaignDetailPage;
