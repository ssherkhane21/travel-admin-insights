
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type BookingStatus = "confirmed" | "pending" | "cancelled";

type Booking = {
  id: string;
  customer: string;
  type: "hotel" | "bus" | "taxi" | "bike";
  date: string;
  amount: string;
  status: BookingStatus;
};

const recentBookings: Booking[] = [
  {
    id: "BK-1234",
    customer: "John Doe",
    type: "hotel",
    date: "2025-05-10",
    amount: "₹4,500",
    status: "confirmed",
  },
  {
    id: "BK-1235",
    customer: "Jane Smith",
    type: "bus",
    date: "2025-05-11",
    amount: "₹800",
    status: "pending",
  },
  {
    id: "BK-1236",
    customer: "Robert Johnson",
    type: "taxi",
    date: "2025-05-11",
    amount: "₹350",
    status: "confirmed",
  },
  {
    id: "BK-1237",
    customer: "Emily Davis",
    type: "bike",
    date: "2025-05-12",
    amount: "₹200",
    status: "cancelled",
  },
  {
    id: "BK-1238",
    customer: "Michael Brown",
    type: "hotel",
    date: "2025-05-12",
    amount: "₹5,200",
    status: "confirmed",
  },
];

export const RecentBookingsTable = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Booking ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentBookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell className="font-medium">{booking.id}</TableCell>
              <TableCell>{booking.customer}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    booking.type === "hotel"
                      ? "border-admin-blue text-admin-blue"
                      : booking.type === "bus"
                      ? "border-admin-green text-admin-green"
                      : booking.type === "taxi"
                      ? "border-admin-yellow text-admin-yellow"
                      : "border-admin-red text-admin-red"
                  }
                >
                  {booking.type.charAt(0).toUpperCase() + booking.type.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>{booking.date}</TableCell>
              <TableCell>{booking.amount}</TableCell>
              <TableCell>
                <Badge
                  className={
                    booking.status === "confirmed"
                      ? "bg-admin-green"
                      : booking.status === "pending"
                      ? "bg-admin-yellow"
                      : "bg-admin-red"
                  }
                >
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
