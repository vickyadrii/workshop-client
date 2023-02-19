import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import imageCard from "../../../assets/images/imageCard.png";
import { Button, Card, Progress } from "antd";
import { api } from "../../../config/api";

const CampaignDetailPage = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(0);
  const [detailCampaign, setDetailCampaign] = useState("");

  const handleonBack = () => {
    navigate(-1);
  };

  const fetchDetailCampaign = () => {
    api
      .get(`/campaigns/${id}`)
      .then((res) => {
        console.log(res);
        setDetailCampaign(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { title, target, current_donation, targetDate } = detailCampaign;

  useEffect(() => {
    fetchDetailCampaign();
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
            {title}
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
                Rp. {current_donation}
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
                  Rp. {target}
                </span>
              </p>
            </div>
            <p
              style={{
                margin: 0,
              }}
            >
              {targetDate}
            </p>
          </div>
        </div>
        <div
          style={{
            margin: "8px 0",
          }}
        >
          <Progress
            percent={(current_donation / target) * 100}
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
