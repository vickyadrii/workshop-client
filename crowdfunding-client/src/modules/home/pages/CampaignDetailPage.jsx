import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftOutlined, MoreOutlined } from "@ant-design/icons";
import imageCard from "../../../assets/images/imageCard.png";
import { Button, Card, Slider } from "antd";
import { AntDesignOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import { Avatar } from "antd";

const CampaignDetailPage = () => {
  let { id } = useParams();
  const [inputValue, setInputValue] = useState(0);
  const navigate = useNavigate();

  const handleOnChange = (newValue) => {
    setInputValue(newValue);
  };

  const handleonBack = () => {
    navigate(-1);
  };

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
          alignItems: "center",
          justifyContent: "space-between",
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
        <Button
          style={{
            padding: "5px 10px",
          }}
        >
          <MoreOutlined
            style={{
              fontSize: 16,
            }}
          />
        </Button>
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
        <h2>Clean water for refugees camp</h2>
        <p
          style={{
            color: "#15B2C0",
            fontWeight: "600",
          }}
        >
          9 Days left
        </p>
      </div>
      <Card
        bordered={false}
        style={{
          margin: "1rem 0",
        }}
      >
        <div>
          <p>Donation Raised</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>17.345</p>
            <p>{inputValue}%</p>
          </div>
        </div>
        <div>
          <Slider
            min={0}
            max={100}
            onChange={handleOnChange}
            defaultValue={32}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </div>
      </Card>
      <Card
        title="Campaign by"
        type="inner"
        bordered={false}
        style={{
          margin: "1rem 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Avatar
              size={{
                xl: 84,
              }}
              icon={<AntDesignOutlined />}
            />
            <div>
              <h3
                style={{
                  margin: 0,
                  color: "#15B2C0",
                  fontSize: "18px",
                }}
              >
                Vicky Adri
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#b3b3b3",
                  fontSize: "14px",
                }}
              >
                Verified user
              </p>
            </div>
          </div>
          <CheckCircleTwoTone
            style={{
              fontSize: 30,
            }}
          />
        </div>
      </Card>
      <Button
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
