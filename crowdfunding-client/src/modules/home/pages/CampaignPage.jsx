import { useEffect } from "react";
import CampaignHeader from "../components/CampaignHeader";
import CampaignCard from "../components/CampaignCard";

import loveImages from "../../../assets/images/love.jpg";

const CampaignPage = () => {
  useEffect(() => {
    document.title = "Home | Kita Bisa";
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
        }}
      >
        <img
          src={loveImages}
          alt="love"
          style={{
            width: "40px",
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
      <CampaignCard />
    </section>
  );
};

export default CampaignPage;
