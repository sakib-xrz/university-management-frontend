import AuthGuardHOC from "@/components/shared/AuthGuardHOC";
import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { Layout } from "antd";

export default function DashboardLayout({ children }) {
  return (
    <AuthGuardHOC>
      <Layout hasSider>
        <Sidebar />
        <Contents>{children}</Contents>
      </Layout>
    </AuthGuardHOC>
  );
}
