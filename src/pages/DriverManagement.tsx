
import { DriverManagementTable } from "@/components/drivers/DriverManagementTable";

const DriverManagement = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Driver Management</h2>
        <p className="text-muted-foreground">
          Manage driver details and license information.
        </p>
      </div>
      
      <DriverManagementTable />
    </div>
  );
};

export default DriverManagement;
