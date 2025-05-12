
import { BookingTable, BookingData } from "@/components/bookings/BookingTable";

// Mock data
const taxiBookingsData: BookingData[] = [
  {
    id: "TXI-1001",
    customer: "James Wilson",
    type: "taxi",
    date: "2025-05-08",
    amount: "₹450",
    status: "confirmed",
    details: "Airport to Hotel, Sedan",
  },
  {
    id: "TXI-1002",
    customer: "Ananya Desai",
    type: "taxi",
    date: "2025-05-09",
    amount: "₹350",
    status: "confirmed",
    details: "Railway Station to Office, Hatchback",
  },
  {
    id: "TXI-1003",
    customer: "Tom Harris",
    type: "taxi",
    date: "2025-05-09",
    amount: "₹800",
    status: "pending",
    details: "City Tour, 6 Hours, SUV",
  },
  {
    id: "TXI-1004",
    customer: "Meera Reddy",
    type: "taxi",
    date: "2025-05-10",
    amount: "₹1,200",
    status: "confirmed",
    details: "Intercity, Mumbai to Pune, Sedan",
  },
  {
    id: "TXI-1005",
    customer: "Peter Johnson",
    type: "taxi",
    date: "2025-05-10",
    amount: "₹550",
    status: "cancelled",
    details: "Hotel to Airport, Premium Sedan",
  },
  {
    id: "TXI-1006",
    customer: "Ravi Sharma",
    type: "taxi",
    date: "2025-05-11",
    amount: "₹300",
    status: "confirmed",
    details: "Office to Home, Hatchback",
  },
  {
    id: "TXI-1007",
    customer: "Sophie Miller",
    type: "taxi",
    date: "2025-05-11",
    amount: "₹1,600",
    status: "pending",
    details: "Outstation, Delhi to Agra, SUV",
  },
];

const TaxiBookings = () => {
  return <BookingTable data={taxiBookingsData} type="taxi" title="Taxi Bookings" />;
};

export default TaxiBookings;
