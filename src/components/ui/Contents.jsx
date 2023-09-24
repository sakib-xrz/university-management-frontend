"use client";

import { Layout } from "antd";
const { Content } = Layout;

export default function Contents({ children }) {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
        margin: "16px",
      }}
    >
      {children}
    </Content>
  );
}
