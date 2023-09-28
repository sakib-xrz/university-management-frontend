import ActionBar from "@/components/ui/ActionBar";

export default function Department() {
  return (
    <>
      <title>University Management - Department</title>
      <ActionBar
        title={"Department"}
        button={"Create Department"}
        url={"/super_admin/department/create"}
      />
    </>
  );
}
