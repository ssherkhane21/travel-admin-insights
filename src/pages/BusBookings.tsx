
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Eye, Bus } from "lucide-react";

// Mock data
const busBookingsData = [
  {
    id: "BUS-1001",
    operatorName: "Royal Tours",
    registrationNumber: "DL01AB1234",
    assignedDriver: "Rohit Sharma",
    departureLocation: "Delhi",
    departureTime: "2025-05-10 07:30 AM",
    arrivalLocation: "Mumbai",
    arrivalTime: "2025-05-10 08:30 PM",
    status: "confirmed",
  },
  {
    id: "BUS-1002",
    operatorName: "Comfort Travels",
    registrationNumber: "MH02CD5678",
    assignedDriver: "Ajay Kumar",
    departureLocation: "Bangalore",
    departureTime: "2025-05-11 06:00 AM",
    arrivalLocation: "Chennai",
    arrivalTime: "2025-05-11 03:30 PM",
    status: "confirmed",
  },
  {
    id: "BUS-1003",
    operatorName: "City Connect",
    registrationNumber: "KA03EF9012",
    assignedDriver: "Vijay Singh",
    departureLocation: "Jaipur",
    departureTime: "2025-05-12 08:00 AM",
    arrivalLocation: "Delhi",
    arrivalTime: "2025-05-12 06:00 PM",
    status: "pending",
  },
  {
    id: "BUS-1004",
    operatorName: "Highway Express",
    registrationNumber: "GJ04GH3456",
    assignedDriver: "Anand Patel",
    departureLocation: "Mumbai",
    departureTime: "2025-05-13 10:30 PM",
    arrivalLocation: "Goa",
    arrivalTime: "2025-05-14 11:00 AM",
    status: "confirmed",
  },
  {
    id: "BUS-1005",
    operatorName: "Green Line Tours",
    registrationNumber: "TN05IJ7890",
    assignedDriver: "Rahul Verma",
    departureLocation: "Pune",
    departureTime: "2025-05-14 07:00 AM",
    arrivalLocation: "Mumbai",
    arrivalTime: "2025-05-14 10:00 AM",
    status: "cancelled",
  },
];

const BusBookings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredBookings = busBookingsData.filter((booking) =>
    booking.operatorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.assignedDriver.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.departureLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.arrivalLocation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Bus Bookings</h1>
        <p className="text-muted-foreground">
          Manage all bus bookings and their details
        </p>
      </div>

      <div className="flex items-center justify-between gap-x-2">
        <div className="flex items-center gap-x-2 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search bookings..."
              className="w-full pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableCaption>A list of all bus bookings</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Bus Operator Name</TableHead>
              <TableHead>Bus Registration</TableHead>
              <TableHead>Assigned Driver</TableHead>
              <TableHead>Departure</TableHead>
              <TableHead>Departure Time</TableHead>
              <TableHead>Arrival</TableHead>
              <TableHead>Arrival Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <Bus className="mr-2 h-4 w-4 text-admin-blue" />
                    {booking.operatorName}
                  </div>
                </TableCell>
                <TableCell>{booking.registrationNumber}</TableCell>
                <TableCell>{booking.assignedDriver}</TableCell>
                <TableCell>{booking.departureLocation}</TableCell>
                <TableCell>{booking.departureTime.split(' ').slice(1, 3).join(' ')}</TableCell>
                <TableCell>{booking.arrivalLocation}</TableCell>
                <TableCell>{booking.arrivalTime.split(' ').slice(1, 3).join(' ')}</TableCell>
                <TableCell>
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                      booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'}`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" /> View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BusBookings;
