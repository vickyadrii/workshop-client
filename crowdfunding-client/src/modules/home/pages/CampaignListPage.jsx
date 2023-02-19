import { useEffect, useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Card, Progress } from "antd";
import { useNavigate } from "react-router-dom";
import { api } from "../../../config/api";
import coverCampaigns from "../../../assets/images/imageCard.png";

const CampaignListPage = () => {
  const navigate = useNavigate();
  const [dataCampaigns, setDataCampaigns] = useState([]);

  const fetchdataCampaigns = () => {
    api
      .get("/campaigns")
      .then((res) => {
        setDataCampaigns(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleonBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    document.title = "Campaign List Page | Workshop";
    fetchdataCampaigns();
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
        <h3>Campaign List Page</h3>
      </header>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {dataCampaigns.map(
          ({ id, title, content, target, current_donation, targetDate }) => (
            <Card
              key={id}
              // cover={<img src={coverCampaigns} alt="" />}
              onClick={() => {
                navigate(`/campaign/${id}`);
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src={coverCampaigns}
                  alt=""
                  style={{
                    width: "50%",
                    borderRadius: "8px",
                  }}
                />
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "14px",
                      margin: 0,
                      color: "#464646",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      color: "#464646",
                    }}
                  >
                    {content}
                  </p>
                  <Progress
                    percent={(current_donation / target) * 100}
                    size={"small"}
                    showInfo={false}
                  />
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
                        marginTop: "1rem",
                      }}
                    >
                      <span
                        style={{
                          color: "#a5a1a1",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                      >
                        Collected
                      </span>
                      <span
                        style={{
                          color: "#15B2C0",
                          fontWeight: "600",
                        }}
                      >
                        Rp. {current_donation}
                      </span>
                    </div>
                    <span
                      style={{
                        color: "#5c5c5c",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      {targetDate}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

export default CampaignListPage;
