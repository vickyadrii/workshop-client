import { useCallback, useEffect, useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Card, Col, Progress, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import coverCampaigns from "../../../assets/images/imageCard.png";
import toRupiah from "@develoka/angka-rupiah-js";
import campaignService from "../../../services/campaignService";

const { Text, Title } = Typography;

const CampaignListPage = () => {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = useCallback(() => {
    campaignService
      .getAllCampaign()
      .then((res) => setCampaigns(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleonBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    document.title = "Campaign List Page | Workshop";
    fetchCampaigns();
  }, []);

  return (
    <div className="py-4">
      <div className="items-center gap-4 my-4">
        <Button onClick={handleonBack}>
          <ArrowLeftOutlined size={16} />
        </Button>
        <Text className="fn-4 bold">Campaign</Text>
      </div>
      <Row gutter={[8, 8]}>
        {campaigns.map(
          ({ id, title, content, target, current_donation, targetDate }) => (
            <Col>
              <Card
                key={id}
                onClick={() => navigate(`/campaign/${id}`)}
                style={{
                  cursor: "pointer",
                }}
              >
                <div className="items-center gap-4">
                  <img
                    src={coverCampaigns}
                    alt=""
                    style={{
                      maxWidth: "50%",
                      borderRadius: "8px",
                    }}
                  />
                  <div className="w-full">
                    <Card.Meta title={title} description={content} />
                    <Progress
                      percent={(current_donation / target) * 100}
                      size="small"
                      showInfo={false}
                    />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="flex mt-4 flex-column">
                        <Text
                          style={{
                            color: "#a5a1a1",
                            fontWeight: "600",
                            fontSize: "12px",
                          }}
                        >
                          Collected
                        </Text>
                        <Text
                          style={{
                            color: "#15B2C0",
                            fontWeight: "600",
                          }}
                        >
                          {toRupiah(current_donation)}
                        </Text>
                      </div>
                      <Text
                        style={{
                          color: "#5c5c5c",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        {targetDate}
                      </Text>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default CampaignListPage;
