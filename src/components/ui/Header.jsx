import { Avatar, Dropdown, Layout } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

const { Header: AndHeader } = Layout;

import { useDispatch, useSelector } from "react-redux";
import { clearUserData, selectUser } from "@/redux/reducers/userSlice";
import { AUTH_TOKEN_KEY } from "@/common/KeyChain";
import { useRouter } from "next/navigation";

const headerStyle = {
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#002140",
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  gap: "20px",
};

export default function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { role } = user;

  const handleLogout = () => {
    dispatch(clearUserData());
    localStorage.removeItem(AUTH_TOKEN_KEY);
    router.push("/login");
  };

  const items = [
    {
      label: "Logout",
      key: "1",
      icon: <LogoutOutlined />,
      danger: true,
      onClick: handleLogout,
    },
  ];

  return (
    <AndHeader style={headerStyle}>
      <h3 style={{ textTransform: "capitalize" }}>{role?.replace("_", " ")}</h3>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
        arrow
      >
        <Avatar
          style={{ background: "white", color: "#002140" }}
          size="large"
          icon={<UserOutlined />}
        />
      </Dropdown>
    </AndHeader>
  );
}
