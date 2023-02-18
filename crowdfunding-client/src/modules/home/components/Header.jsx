import { CgSearch } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h3
          style={{
            fontSize: "14px",
            color: "#c4c4c4",
          }}
        >
          Let's help each others!
        </h3>
        <h2
          style={{
            fontSize: "16px",
            color: "#293131",
          }}
        >
          John Doe
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <CgSearch size={20} />
        <IoMdNotificationsOutline size={20} />
      </div>
    </section>
  );
};

export default Header;
