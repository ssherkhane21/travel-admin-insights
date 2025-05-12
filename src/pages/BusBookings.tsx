
import { BookingTable, BookingData } from "@/components/bookings/BookingTable";

// Mock data
const busBookingsData: BookingData[] = [
  {
    id: "BUS-1001",
    customer: "John Smith",
    type: "bus",
    date: "2025-05-05",
    amount: "₹1,200",
    status: "confirmed",
    details: "Delhi to Mumbai, AC Sleeper",
  },
  {
    id: "BUS-1002",
    customer: "Priya Patel",
    type: "bus",
    date: "2025-05-06",
    amount: "₹900",
    status: "confirmed",
    details: "Bangalore to Chennai, Volvo AC",
  },
  {
    id: "BUS-1003",
    customer: "Michael Brown",
    type: "bus",
    date: "2025-05-06",
    amount: "₹750",
    status: "pending",
    details: "Jaipur to Delhi, Semi-Sleeper",
  },
  {
    id: "BUS-1004",
    customer: "Sarah Johnson",
    type: "bus",
    date: "2025-05-07",
    amount: "₹1,500",
    status: "confirmed",
    details: "Mumbai to Goa, Luxury AC",
  },
  {
    id: "BUS-1005",
    customer: "Amit Kumar",
    type: "bus",
    date: "2025-05-07",
    amount: "₹650",
    status: "cancelled",
    details: "Pune to Mumbai, Non-AC Seater",
  },
  {
    id: "BUS-1006",
    customer: "Emily Davis",
    type: "bus",
    date: "2025-05-08",
    amount: "₹1,100",
    status: "confirmed",
    details: "Hyderabad to Bangalore, AC Sleeper",
  },
  {
    id: "BUS-1007",
    customer: "Rajesh Singh",
    type: "bus",
    date: "2025-05-08",
    amount: "₹850",
    status: "pending",
    details: "Kolkata to Bhubaneswar, AC Seater",
  },
];

const BusBookings = () => {
  return <BookingTable data={busBookingsData} type="bus" title="Bus Bookings" />;
};

export default BusBookings;
