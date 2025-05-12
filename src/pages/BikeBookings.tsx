
import { BookingTable, BookingData } from "@/components/bookings/BookingTable";

// Mock data
const bikeBookingsData: BookingData[] = [
  {
    id: "BIK-1001",
    customer: "Arjun Singh",
    type: "bike",
    date: "2025-05-05",
    amount: "₹350",
    status: "confirmed",
    details: "Royal Enfield Classic, 1 Day",
  },
  {
    id: "BIK-1002",
    customer: "Lisa Brown",
    type: "bike",
    date: "2025-05-06",
    amount: "₹500",
    status: "confirmed",
    details: "Honda Activa, 3 Days",
  },
  {
    id: "BIK-1003",
    customer: "Rahul Mehta",
    type: "bike",
    date: "2025-05-07",
    amount: "₹800",
    status: "pending",
    details: "KTM Duke, 2 Days",
  },
  {
    id: "BIK-1004",
    customer: "Emma Wilson",
    type: "bike",
    date: "2025-05-08",
    amount: "₹1,200",
    status: "confirmed",
    details: "Yamaha R15, 4 Days",
  },
  {
    id: "BIK-1005",
    customer: "Vikram Joshi",
    type: "bike",
    date: "2025-05-09",
    amount: "₹250",
    status: "cancelled",
    details: "Bajaj Pulsar, 1 Day",
  },
  {
    id: "BIK-1006",
    customer: "Grace Miller",
    type: "bike",
    date: "2025-05-10",
    amount: "₹900",
    status: "confirmed",
    details: "Royal Enfield Himalayan, 3 Days",
  },
  {
    id: "BIK-1007",
    customer: "Kiran Kumar",
    type: "bike",
    date: "2025-05-11",
    amount: "₹450",
    status: "pending",
    details: "TVS Apache, 2 Days",
  },
];

const BikeBookings = () => {
  return <BookingTable data={bikeBookingsData} type="bike" title="Bike Bookings" />;
};

export default BikeBookings;
