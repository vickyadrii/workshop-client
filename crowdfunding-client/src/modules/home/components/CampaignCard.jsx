import { useNavigate } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeCard } from "../../../data";
import { Card, Progress } from "antd";
import coverCampaigns from "../../../assets/images/imageCard.png";
import "./styles.css";

const CampaignCard = ({ dataCampaigns }) => {
  console.log(dataCampaigns);
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
        minHeight: "365px",
      }}
    >
      {dataCampaigns.map(
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
              <div style={{
                height: '150px'
              }}>
                <h3
                  className="title-card"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {title}
                </h3>
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
                    <span className="content-card">{content}</span>
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
            </Card>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default CampaignCard;
