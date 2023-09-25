"use client";

import { Layout } from "antd";
import UMBreadCrumb from "./UMBreadCrumb";

const { Content } = Layout;

export default function Contents({ children }) {
  const base = "admin";
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
        margin: "16px",
      }}
    >
      <div style={{ padding: "5px 0px" }}>
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
      </div>
      {children}
    </Content>
  );
}
