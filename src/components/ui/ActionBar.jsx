import { Button } from "antd";
import Link from "next/link";
import React from "react";

export default function ActionBar({ title, button, url }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
      }}
    >
      <h1>{title}</h1>
      {button && url && (
        <Link href={url}>
          <Button type="primary">{button}</Button>
        </Link>
      )}
    </div>
  );
}
