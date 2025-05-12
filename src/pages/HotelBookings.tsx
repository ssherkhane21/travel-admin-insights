
import { BookingTable, BookingData } from "@/components/bookings/BookingTable";

// Mock data
const hotelBookingsData: BookingData[] = [
  {
    id: "HTL-1001",
    customer: "Alice Johnson",
    type: "hotel",
    date: "2025-05-10",
    amount: "₹12,500",
    status: "confirmed",
    details: "Marriott, Deluxe Room, 3 Nights",
  },
  {
    id: "HTL-1002",
    customer: "Robert Smith",
    type: "hotel",
    date: "2025-05-11",
    amount: "₹8,700",
    status: "confirmed",
    details: "Taj Hotel, Suite, 2 Nights",
  },
  {
    id: "HTL-1003",
    customer: "Priya Sharma",
    type: "hotel",
    date: "2025-05-12",
    amount: "₹5,200",
    status: "pending",
    details: "Hyatt, Standard Room, 4 Nights",
  },
  {
    id: "HTL-1004",
    customer: "David Wilson",
    type: "hotel",
    date: "2025-05-12",
    amount: "₹18,900",
    status: "confirmed",
    details: "Four Seasons, Executive Suite, 5 Nights",
  },
  {
    id: "HTL-1005",
    customer: "Neha Patel",
    type: "hotel",
    date: "2025-05-13",
    amount: "₹7,500",
    status: "cancelled",
    details: "Radisson, Deluxe Room, 3 Nights",
  },
  {
    id: "HTL-1006",
    customer: "Michael Brown",
    type: "hotel",
    date: "2025-05-14",
    amount: "₹15,200",
    status: "confirmed",
    details: "JW Marriott, Premium Room, 4 Nights",
  },
  {
    id: "HTL-1007",
    customer: "Sanjay Gupta",
    type: "hotel",
    date: "2025-05-15",
    amount: "₹9,800",
    status: "pending",
    details: "Leela Palace, Garden View Room, 2 Nights",
  },
];

const HotelBookings = () => {
  return <BookingTable data={hotelBookingsData} type="hotel" title="Hotel Bookings" />;
};

export default HotelBookings;
