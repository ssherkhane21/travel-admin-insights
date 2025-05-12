
import { Bus, Building, Car, Bike } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { BookingChart } from "@/components/dashboard/BookingChart";
import { RecentBookingsTable } from "@/components/dashboard/RecentBookingsTable";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of all bookings and performance metrics.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Hotel Bookings"
          value="548"
          icon={Building}
          trend={12}
          description="Last 30 days"
        />
        <StatsCard
          title="Total Bus Bookings"
          value="1,234"
          icon={Bus}
          trend={8}
          description="Last 30 days"
        />
        <StatsCard
          title="Total Taxi Bookings"
          value="879"
          icon={Car}
          trend={-3}
          description="Last 30 days"
        />
        <StatsCard
          title="Total Bike Bookings"
          value="432"
          icon={Bike}
          trend={5}
          description="Last 30 days"
        />
      </div>

      <BookingChart />
      
      <div>
        <h3 className="text-lg font-medium mb-4">Recent Bookings</h3>
        <RecentBookingsTable />
      </div>
    </div>
  );
};

export default Dashboard;
