"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

import SidebarItems from "@/constants/SidebarItems";
import { USER_ROLE } from "@/constants/role";

const role = USER_ROLE.ADMIN;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        padding: "16px 0px",
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        {collapsed ? "PH" : "PH-University"}
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["profile"]}
        mode="inline"
        items={SidebarItems(role)}
      />
    </Sider>
  );
}
