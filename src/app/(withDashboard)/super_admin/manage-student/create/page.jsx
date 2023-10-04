"use client";

import StepperForm from "@/components/forms/StepperForm";
import StudentInfo from "./components/StudentInfo";
import StudentBasicInfo from "./components/StudentBasicInfo";
import GuardianInfo from "./components/GuardianInfo";
import LocalGuardianInfo from "./components/LocalGuardianInfo";

export default function CreateStudent() {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentBasicInfo />,
    },
    {
      title: "Guardian Information",
      content: <GuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuardianInfo />,
    },
  ];

  const handleStudentSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <title>University Management - Create Student</title>
      <div>
        <h1 style={{ marginBottom: "10px" }}>Create Student</h1>
        <StepperForm
          submitHandler={(value) => {
            handleStudentSubmit(value);
          }}
          steps={steps}
        />
      </div>
    </>
  );
}
