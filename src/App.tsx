
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminLayout } from "./components/layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import BusBookings from "./pages/BusBookings";
import BusOperators from "./pages/BusOperators";
import HotelBookings from "./pages/HotelBookings";
import TaxiBookings from "./pages/TaxiBookings";
import BikeBookings from "./pages/BikeBookings";
import UserManagement from "./pages/UserManagement";
import DriverManagement from "./pages/DriverManagement";
import Commission from "./pages/Commission";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          } />
          <Route path="/bus-operators" element={
            <AdminLayout>
              <BusOperators />
            </AdminLayout>
          } />
          <Route path="/bus-bookings" element={
            <AdminLayout>
              <BusBookings />
            </AdminLayout>
          } />
          <Route path="/hotel-bookings" element={
            <AdminLayout>
              <HotelBookings />
            </AdminLayout>
          } />
          <Route path="/taxi-bookings" element={
            <AdminLayout>
              <TaxiBookings />
            </AdminLayout>
          } />
          <Route path="/bike-bookings" element={
            <AdminLayout>
              <BikeBookings />
            </AdminLayout>
          } />
          <Route path="/driver-management" element={
            <AdminLayout>
              <DriverManagement />
            </AdminLayout>
          } />
          <Route path="/users" element={
            <AdminLayout>
              <UserManagement />
            </AdminLayout>
          } />
          <Route path="/commission" element={
            <AdminLayout>
              <Commission />
            </AdminLayout>
          } />
          <Route path="/settings" element={
            <AdminLayout>
              <Settings />
            </AdminLayout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
