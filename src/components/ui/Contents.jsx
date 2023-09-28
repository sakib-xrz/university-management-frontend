"use client";

import { Layout } from "antd";
import UMBreadCrumb from "./UMBreadCrumb";
import Header from "./Header";

const { Content } = Layout;

export default function Contents({ children }) {
  const base = "admin";
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <Header />
      <div style={{ margin: "16px" }}>
        <UMBreadCrumb
          items={[
            {
              label: `${base}`,
              link: `/${base}`,
            },
            {
              label: "student",
              link: `/${base}/student`,
            },
          ]}
        />
        <div style={{ marginTop: "8px" }}>{children}</div>
      </div>
    </Content>
  );
}
