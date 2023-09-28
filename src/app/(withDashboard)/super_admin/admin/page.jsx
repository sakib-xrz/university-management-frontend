import ActionBar from "@/components/ui/ActionBar";

export default function ManageAdmin() {
  return (
    <>
      <title>University Management - Manage Admin</title>
      <ActionBar
        title={"Admin"}
        button={"Create Admin"}
        url={"/super_admin/admin/create"}
      />
    </>
  );
}
