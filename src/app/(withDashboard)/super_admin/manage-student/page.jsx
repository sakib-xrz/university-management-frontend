import ActionBar from "@/components/ui/ActionBar";

export default function ManageStudent() {
  return (
    <>
      <title>University Management - Manage Student</title>
      <ActionBar
        title={"Student"}
        button={"Create Student"}
        url={"/super_admin/manage-student/create"}
      />
    </>
  );
}
