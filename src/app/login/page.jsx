"use client";

import { Button, Col, Row } from "antd";
import loginImage from "../../assets/login-image.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import toast from "react-hot-toast";
import APIKit from "@/common/APIKit";
import { setJWTokenAndRedirect } from "@/components/shared/AuthGuardHOC";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const previousURL = searchParams.get("next");
  const router = useRouter();

  const onSubmit = (data) => {
    const handleSuccess = ({ data }) => {
      setJWTokenAndRedirect(data?.accessToken, () => {
        if (previousURL) {
          router.push(previousURL);
        } else {
          router.push("/profile");
        }
      });
    };

    const handleFailure = (error) => {
      console.log(error);
      throw error;
    };

    const promise = APIKit.auth
      .login(data)
      .then(handleSuccess)
      .catch(handleFailure);

    return toast.promise(promise, {
      loading: "Logging in...",
      success: "Login successful!",
      error: (error) =>
        error?.response?.data?.message || "Something went wrong",
    });
  };
  return (
    <>
      <title>University Management - Login</title>
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "100vh",
        }}
      >
        <Col sm={12} md={16} lg={10}>
          <Image src={loginImage} width={500} alt="login image" />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h1
            style={{
              margin: "15px 0px",
            }}
          >
            Login to your account
          </h1>
          <div>
            <Form submitHandler={onSubmit}>
              <div>
                <FormInput name="id" type="text" size="large" label="User Id" />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="User Password"
                />
              </div>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
}
