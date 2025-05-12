
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { Bus, Search, Plus, Eye } from "lucide-react";

// Mock data for bus operators
const busOperatorsData = [
  {
    id: "OP-1001",
    name: "Royal Tours",
    mobile: "9876543210",
    email: "info@royaltours.com",
    numberOfBuses: 15,
  },
  {
    id: "OP-1002",
    name: "Comfort Travels",
    mobile: "8765432109",
    email: "support@comforttravel.com",
    numberOfBuses: 23,
  },
  {
    id: "OP-1003",
    name: "City Connect",
    mobile: "7654321098",
    email: "cityconnect@mail.com",
    numberOfBuses: 8,
  },
  {
    id: "OP-1004",
    name: "Highway Express",
    mobile: "6543210987",
    email: "bookings@hwexpress.com",
    numberOfBuses: 18,
  },
  {
    id: "OP-1005",
    name: "Green Line Tours",
    mobile: "5432109876",
    email: "contact@greenline.com",
    numberOfBuses: 12,
  },
];

const BusOperators = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  const filteredOperators = busOperatorsData.filter((operator) =>
    operator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    operator.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    operator.mobile.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Bus Operators</h1>
          <p className="text-muted-foreground">
            Manage your bus operators and their details
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Operator
        </Button>
      </div>

      <div className="flex items-center justify-between gap-x-2">
        <div className="flex items-center gap-x-2 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search operators..."
              className="w-full pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableCaption>A list of your bus operators</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Operator Name</TableHead>
              <TableHead>Mobile Number</TableHead>
              <TableHead>Email Address</TableHead>
              <TableHead>Number of Buses</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOperators.map((operator) => (
              <TableRow key={operator.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <Bus className="mr-2 h-4 w-4 text-admin-blue" />
                    {operator.name}
                  </div>
                </TableCell>
                <TableCell>{operator.mobile}</TableCell>
                <TableCell>{operator.email}</TableCell>
                <TableCell>{operator.numberOfBuses}</TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => navigate(`/bus-operators/${operator.id}`)}
                  >
                    <Eye className="h-4 w-4 mr-1" /> View Details
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

export default BusOperators;
