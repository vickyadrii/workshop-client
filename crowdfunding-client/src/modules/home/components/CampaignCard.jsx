import { useNavigate } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Progress, Typography } from "antd";
import coverCampaigns from "../../../assets/images/imageCard.png";
import "./styles.css";

const { Title, Text } = Typography;

const CampaignCard = ({ campaings }) => {
  const navigate = useNavigate();
  return (
    <Swiper
      modules={[Pagination]}
      pagination={true}
      loop={true}
      slidesPerView="auto"
      breakpoints={{
        300: {
          slidesPerView: "auto",
          spaceBetween: 30,
          pagination: {
            clickable: "true",
            dynamicBullets: "true",
          },
        },
      }}
      className="mt-8"
      style={{
        minHeight: "345px",
      }}
    >
      {campaings.map(
        (
          { id, title, content, target, current_donation, targetDate },
          index
        ) => (
          <SwiperSlide key={index}>
            <Card
              cover={<img src={coverCampaigns} alt="" />}
              onClick={() => {
                navigate(`/campaign/${id}`);
              }}
              bordered={false}
              style={{
                cursor: "pointer",
              }}
            >
              <Title level={4}>{title}</Title>
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
                <div className="flex flex-column mt-4">
                  <Text
                    style={{
                      color: "#a5a1a1",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    {content}
                  </Text>
                  <Text
                    className="primary-color"
                    style={{
                      color: "#15B2C0",
                      fontWeight: "600",
                    }}
                  >
                    Rp. {current_donation}
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
            </Card>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default CampaignCard;
