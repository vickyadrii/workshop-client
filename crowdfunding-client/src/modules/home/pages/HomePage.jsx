import { useEffect, useState } from "react";
import CampaignHeader from "../components/CampaignHeader";
import CampaignCard from "../components/CampaignCard";

import loveImages from "../../../assets/images/love.jpg";

import { api } from "../../../config/api";
import { Card } from "antd";
import campaignService from "../../../services/campaignService";

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
    <section
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "0 2rem",
      }}
    >
      <CampaignHeader />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "#21B4C3",
          height: "6rem",
          borderRadius: "6px",
          padding: "1rem",
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
        <span
          style={{
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          No one has ever become poor by giving
        </span>
      </div>
      <CampaignCard campaings={campaigns} />
    </section>
  );
};

export default HomePage;
