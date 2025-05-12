
import { useState } from "react";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CarFront, UserPlus } from "lucide-react"; // Replace LicensePlate with CarFront

type Driver = {
  id: string;
  name: string;
  phone: string;
  licenseNumber: string;
  licenseExpiry: string;
  vehicleType: string;
  status: "active" | "inactive";
};

// Sample data
const initialDrivers: Driver[] = [
  {
    id: "1",
    name: "John Smith",
    phone: "9876543210",
    licenseNumber: "DL-0123456789",
    licenseExpiry: "2025-12-31",
    vehicleType: "Taxi",
    status: "active"
  },
  {
    id: "2",
    name: "David Wilson",
    phone: "9876543211",
    licenseNumber: "DL-0123456790",
    licenseExpiry: "2024-10-15",
    vehicleType: "Bus",
    status: "active"
  },
  {
    id: "3",
    name: "Michael Brown",
    phone: "9876543212",
    licenseNumber: "DL-0123456791",
    licenseExpiry: "2024-08-22",
    vehicleType: "Bike",
    status: "inactive"
  },
  {
    id: "4",
    name: "Sarah Johnson",
    phone: "9876543213",
    licenseNumber: "DL-0123456792",
    licenseExpiry: "2025-05-18",
    vehicleType: "Taxi",
    status: "active"
  },
  {
    id: "5",
    name: "Emma Davis",
    phone: "9876543214",
    licenseNumber: "DL-0123456793",
    licenseExpiry: "2024-11-30",
    vehicleType: "Bus",
    status: "inactive"
  },
];

export const DriverManagementTable = () => {
  const [drivers, setDrivers] = useState<Driver[]>(initialDrivers);
  const [searchTerm, setSearchTerm] = useState("");
  const [vehicleFilter, setVehicleFilter] = useState<string>("all");

  // Filter drivers based on search term and vehicle type filter
  const filteredDrivers = drivers.filter(driver => {
    const matchesSearch = driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          driver.phone.includes(searchTerm) ||
                          driver.licenseNumber.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesVehicle = vehicleFilter === "all" || driver.vehicleType.toLowerCase() === vehicleFilter.toLowerCase();
    
    return matchesSearch && matchesVehicle;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
        <div className="w-full md:w-1/3">
          <Input
            placeholder="Search by name, phone or license..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex gap-4">
          <select
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={vehicleFilter}
            onChange={(e) => setVehicleFilter(e.target.value)}
          >
            <option value="all">All Vehicles</option>
            <option value="taxi">Taxi</option>
            <option value="bus">Bus</option>
            <option value="bike">Bike</option>
          </select>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Driver
          </Button>
        </div>
      </div>
      
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>License Number</TableHead>
              <TableHead>License Expiry</TableHead>
              <TableHead>Vehicle Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDrivers.length > 0 ? (
              filteredDrivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell>{driver.name}</TableCell>
                  <TableCell>{driver.phone}</TableCell>
                  <TableCell className="flex items-center">
                    <CarFront className="mr-2 h-4 w-4 text-admin-blue" /> {/* Replace LicensePlate with CarFront */}
                    {driver.licenseNumber}
                  </TableCell>
                  <TableCell>{driver.licenseExpiry}</TableCell>
                  <TableCell>{driver.vehicleType}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      driver.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {driver.status === "active" ? "Active" : "Inactive"}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="mr-2">View</Button>
                    <Button variant="outline" size="sm">Edit</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-4">
                  No drivers found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
