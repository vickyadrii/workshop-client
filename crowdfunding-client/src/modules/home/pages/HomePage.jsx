import { useEffect, useState } from "react";
import CampaignHeader from "../components/CampaignHeader";
import CampaignCard from "../components/CampaignCard";

import loveImages from "../../../assets/images/love.jpg";

import campaignService from "../../../services/campaignService";
import { Typography } from "antd";

const { Text } = Typography;

const HomePage = () => {
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = () => {
    campaignService
      .getAllCampaign()
      .then((res) => {
        setCampaigns(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    document.title = "Campaign Page | Workshop";
    fetchCampaigns();
  }, []);

  return (
    <div className="py-4">
      <CampaignHeader />
      <div
        className="flex-center gap-2 p-4"
        style={{
          backgroundColor: "#21B4C3",
          height: "6rem",
          borderRadius: "6px",
        }}
      >
        <img
          src={loveImages}
          alt="love"
          style={{
            width: "40px",
            borderRadius: "8px",
          }}
        />
        <Text
          style={{
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          No one has ever become poor by giving
        </Text>
      </div>
      <CampaignCard campaings={campaigns} />
    </div>
  );
};

export default HomePage;
