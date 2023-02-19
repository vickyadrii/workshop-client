import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeCard } from "../../../data";
import { Card } from "antd";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

const CampaignCard = () => {
  const navigate = useNavigate();
  return (
    <Swiper
      modules={[Pagination]}
      // navigation={true}
      pagination={true}
      loop={true}
      slidesPerView="auto"
      breakpoints={{
        // when window width is >= 640px
        300: {
          slidesPerView: "auto",
          spaceBetween: 30,
          pagination: {
            clickable: "true",
            dynamicBullets: "true",
          },
        },
        // when window width is >= 768px
        768: {
          slidesPerView: "auto",
          spaceBetween: 30,
          pagination: {
            clickable: "true",
            dynamicBullets: "true",
          },
        },
        1024: {
          slidesPerView: "2",
          spaceBetween: 30,
          pagination: {
            clickable: "true",
            dynamicBullets: "true",
          },
        },
      }}
      style={{
        margin: "2rem 0",
        minHeight: "285px",
      }}
    >
      {homeCard.map(
        ({ image, title, descDonation, totalDonation, amount, id }, index) => (
          <SwiperSlide key={index}>
            <Card
              cover={<img src={image} alt="" />}
              onClick={() => {
                navigate(`/campaign/${id}`);
              }}
              bordered={false}
            >
              <h3
                style={{
                  margin: "0",
                  fontSize: "14px",
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
                    marginTop: "1rem",
                  }}
                >
                  <span
                    style={{
                      color: "#d1d1d1",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    {descDonation}
                  </span>
                  <span
                    style={{
                      color: "#15B2C0",
                      fontWeight: "600",
                    }}
                  >
                    {totalDonation}
                  </span>
                </div>
                <span
                  style={{
                    color: "#5c5c5c",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {amount}
                </span>
              </div>
            </Card>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default CampaignCard;
