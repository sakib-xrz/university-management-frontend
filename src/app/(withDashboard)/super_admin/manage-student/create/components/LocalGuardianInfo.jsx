"use client";

import { Col, Row } from "antd";
import FormInput from "@/components/forms/FormInput";
import FormTextArea from "@/components/forms/FormTextArea";

export default function LocalGuardianInfo() {
  return (
    <>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
          Local Guardian information
        </p>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              name="student.localGuardian.name"
              label="Local guardian name"
              size="large"
            />
          </Col>

          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              name="student.localGuardian.occupation"
              label="Local guardian occupation"
              size="large"
            />
          </Col>

          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              name="student.localGuardian.contactNo"
              label="Local guardian contact no."
              size="large"
            />
          </Col>

          <Col span={24} style={{ margin: "10px 0" }}>
            <FormTextArea
              name="student.localGuardian.address"
              label="Local guardian address"
              rows={4}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
