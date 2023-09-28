import ActionBar from "@/components/ui/ActionBar";

export default function ManageFaculty() {
  return (
    <>
      <title>University Management - Manage Faculty</title>
      <ActionBar
        title={"Faculty"}
        button={"Create Faculty"}
        url={"/super_admin/manage-faculty/create"}
      />
    </>
  );
}
