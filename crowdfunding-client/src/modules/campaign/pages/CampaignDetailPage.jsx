import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import imageCard from "../../../assets/images/imageCard.png";
import { Button, Card, Progress } from "antd";
import campaignService from "../../../services/campaignService";
import toRupiah from "@develoka/angka-rupiah-js";

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
    <section
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "0 2rem",
      }}
    >
      <header
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          margin: "1rem 0",
        }}
      >
        <Button
          onClick={handleonBack}
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
        <h3>Detail</h3>
      </header>
      <div>
        <img
          src={imageCard}
          alt="image card"
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
      </div>
      <Card
        bordered={false}
        style={{
          margin: "1rem 0",
        }}
      >
        <div>
          <h3
            style={{
              color: "#706a6a",
            }}
          >
            {campaign.title}
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <p
                style={{
                  color: "#15B2C0",
                  fontWeight: "600",
                  fontSize: "20px",
                  margin: 0,
                }}
              >
                {toRupiah(Number(campaign.current_donation))}
              </p>
              <p
                style={{
                  margin: 0,
                }}
              >
                Collected from{" "}
                <span
                  style={{
                    fontWeight: "600",
                  }}
                >
                  {toRupiah(Number(campaign.target))}
                </span>
              </p>
            </div>
            <p
              style={{
                margin: 0,
              }}
            >
              {campaign.targetDate}
            </p>
          </div>
        </div>
        <div
          style={{
            margin: "8px 0",
          }}
        >
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
        style={{
          backgroundColor: "#15B2C0",
          fontWeight: "600",
          margin: "1rem 0",
          width: "100%",
          height: "50px",
        }}
      >
        Donate now
      </Button>
    </section>
  );
};

export default CampaignDetailPage;
