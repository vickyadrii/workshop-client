import { notification } from "antd";

const NotificationError = (description) => {
  typeof description === "string"
    ? notification.error({
      message: "Error",
      description,
    })
    : description.map((data) =>
      notification.error({
        message: "Error",
        description: data?.message,
      })
    );
};

export default NotificationError;
