"use client";

import { Layout } from "antd";
import UMBreadCrumb from "./UMBreadCrumb";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { generateBreadcrumbArray } from "@/common/UtilKit";

const { Content } = Layout;

export default function Contents({ children }) {
  const pathName = usePathname();
  const breadCrumbItemsArray = generateBreadcrumbArray(pathName);

  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <Header />
      <div style={{ margin: "16px" }}>
        <UMBreadCrumb items={breadCrumbItemsArray} />
        <div style={{ marginTop: "8px" }}>{children}</div>
      </div>
    </Content>
  );
}
