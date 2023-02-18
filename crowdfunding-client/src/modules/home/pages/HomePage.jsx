import { useEffect } from "react";
import Header from "../components/Header";
import HomeCard from "../components/Card";

import loveImages from "../../../assets/images/love.jpg";
import { GiSelfLove } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { ImBook } from "react-icons/im";
import { Card } from "antd";

const HomePage = () => {
  const homeCategories = [
    {
      Icon: GiSelfLove,
      title: "Humanity",
      color: "yellow",
    },
    {
      Icon: MdHealthAndSafety,
      title: "Health",
      color: "red",
    },
    {
      Icon: ImBook,
      title: "Education",
      color: "blue",
    },
  ];

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
      <Header />
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
      <div>
        <h2
          style={{
            fontSize: "16px",
          }}
        >
          Categories
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            // gap: "10px",
          }}
        >
          {homeCategories.map(({ Icon, title, color }, index) => (
            <Card
              key={index}
              className="categories-card"
              // bordered={false}
              style={{
                width: 130,
                height: 50,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                }}
              >
                <div>
                  <Icon size={20} color={color} />
                </div>
                <div>{title}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <HomeCard />
    </section>
  );
};

export default HomePage;
